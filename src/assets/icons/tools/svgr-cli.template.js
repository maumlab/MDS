/* eslint-disable */
function defaultTemplate({ template }, _, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ["jsx", "typescript"] });
  const IconComponentName = componentName.name.slice(3);

  return typeScriptTpl.ast`
    import React from 'react';
    import { IconProps } from '../index';
    import { IconSize } from '../icon.type';
    import { themes } from '../../../styles';
    import Svg from '../../svg';
    
    export const ${IconComponentName} = React.memo<IconProps>(({ size = IconSize.S, fillColor = 'gray2', suffixForId, ...props }) => {
      const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
      return ${jsx}
    })
  `;
}

module.exports = defaultTemplate;
