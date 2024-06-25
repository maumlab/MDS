import styled from "@emotion/styled";
import { themes } from "../../styles";
import { BadgeRole, BadgeStatus } from "./Badge.type";

export const BaseBadge = styled.span`
  ${themes.typos.badge};
  line-height: normal;
  ${themes.radius.sm};

  /* 베이직 뱃지 */
  &[data-variant="basic"] {
    padding: 2px 4px;
    background-color: ${themes.colors.redDark1};
    color: ${themes.colors.white};

    & > span {
      min-width: 12px;
      display: inline-block;
      text-align: center;
    }
  }

  /* 스테이터스 뱃지 */
  &[data-variant="status"] {
    padding: 4px 8px;

    &[data-status=${BadgeStatus.Sent}] {
      background-color: ${themes.colors.gray6};
      color: ${themes.colors.gray1};
    }
    &[data-status=${BadgeStatus.Progress}] {
      background-color: ${themes.colors.blueLight3};
      color: ${themes.colors.blueDark1};
    }
    &[data-status=${BadgeStatus.Complete}] {
      background-color: ${themes.colors.greenLight3};
      color: ${themes.colors.greenDark1};
    }
    &[data-status=${BadgeStatus.Unfinished}] {
      background-color: ${themes.colors.redLight3};
      color: ${themes.colors.redDark1};
    }
  }

  /* 역할 뱃지 */
  &[data-variant="role"] {
    padding: 2px 6px;

    &[data-role=${BadgeRole.Director}] {
      background-color: ${themes.colors.blue};
      color: ${themes.colors.white};
    }

    &[data-role=${BadgeRole.Doctor}] {
      background-color: ${themes.colors.gray2};
      color: ${themes.colors.white};
    }

    &[data-role=${BadgeRole.Nurse}] {
      background-color: ${themes.colors.redLight1};
      color: ${themes.colors.white};
    }
  }

  /* 레벨 뱃지 */
  &[data-variant="level"] {
    padding: 3px 6px;
    color: ${themes.colors.gray1};

    &[data-level="1"] {
      background-color: ${themes.colors.offBlue};
    }

    &[data-level="2"] {
      background-color: ${themes.colors.offPink};
    }

    &[data-level="3"] {
      background-color: ${themes.colors.offOrange};
    }

    &[data-level="4"] {
      background-color: ${themes.colors.offYellow};
    }

    &[data-level="5"] {
      background-color: ${themes.colors.offPurple};
    }

    &[data-level="6"] {
      background-color: ${themes.colors.offRed};
    }
  }

  /* 서치 뱃지 */
  &[data-variant="search"] {
    padding: 4px 6px;
    color: ${themes.colors.gray1};
    background-color: ${themes.colors.gray6};
  }
`;
