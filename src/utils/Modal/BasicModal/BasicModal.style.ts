import styled from "@emotion/styled";
import { themes } from "../../../styles";

// export const Container = styled.div<{ $size: ModalSize; $responsive: boolean }>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-width: 100%;
//   margin-inline: auto;
//   background-color: ${themes.colors.white};
//   ${themes.radius.lg};
//   ${themes.shadow.md};
//   padding: 48px;

//   display: flex;
//   flex-direction: column;
//   gap: 24px;

//   ${({ $size, $responsive }) => {
//     if ($size === "XS") {
//       return css`
//         width: 380px;

//         ${$responsive && themes.screen.tablet} {
//           width: 300px;
//           padding: 24px;
//           gap: 16px;

//           & .title {
//             ${themes.typos.h4};
//           }
//         }

//         ${$responsive && themes.screen.mobile} {
//           width: 300px;
//           padding: 24px;
//           gap: 16px;

//           & .title {
//             ${themes.typos.h4};
//           }
//         }
//       `;
//     }

//     if ($size === "SM") {
//       return css`
//         width: 600px;

//         ${$responsive && themes.screen.tablet} {
//           width: 450px;
//           padding: 24px;
//           gap: 16px;

//           & > div {
//             height: 29px;

//             & > .title {
//               ${themes.typos.h4};
//             }
//           }
//         }

//         ${$responsive && themes.screen.mobile} {
//           width: 300px;
//           padding: 24px;
//           gap: 16px;

//           & > div {
//             height: 24px;

//             & > .title {
//               ${themes.typos.h6};
//             }
//           }
//         }
//       `;
//     }

//     return css`
//       width: ${$size === "MD" ? 800 : 1000}px;
//     `;
//   }}
// `;

// export const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;

//   & > svg {
//     margin-top: 7px;
//     cursor: pointer;

//     @media (hover: hover) {
//       &:hover {
//         opacity: 0.7;
//       }
//     }
//   }
// `;

export const Container = styled.div`
  // 가운데 정렬
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* max-width: 100%; */
  margin-inline: auto;

  // 배경색, 그림자, 패딩, 모서리
  background-color: ${themes.colors.white};
  ${themes.radius.lg};
  ${themes.shadow.md};
  padding: 48px;

  // 정렬
  display: flex;
  flex-direction: column;
  gap: 24px;

  &[data-size="XS"] {
    width: 380px;
  }

  &[data-size="SM"] {
    width: 600px;
  }

  &[data-size="MD"] {
    width: 800px;
  }

  &[data-size="LG"] {
    width: 1000px;
  }

  // 반응형이 true일 때
  &[data-responsive="true"] {
    ${themes.screen.tablet} {
      padding: 24px;
      gap: 16px;

      &[data-size="XS"] {
        width: 300px;
      }

      &[data-size="SM"] {
        width: 450px;
      }
    }

    ${themes.screen.mobile} {
      padding: 24px;
      gap: 16px;

      &[data-size="XS"] {
        width: 300px;
      }

      &[data-size="SM"] {
        width: 300px;
      }
    }
  }

  & > .header {
    display: flex;
    justify-content: space-between;

    & > svg {
      margin-top: 7px;
      cursor: pointer;
      flex-shrink: 0;

      @media (hover: hover) {
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
