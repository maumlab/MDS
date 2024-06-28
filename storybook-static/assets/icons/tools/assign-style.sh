grep -rl 'svg' ../generated/*.tsx | xargs sed -i '' -e 's/<svg/<Svg /'
grep -rl 'svg' ../generated/*.tsx | xargs sed -i '' -e 's/svg>/Svg>/'