type HolidayItem = {
  dateKind: string; // 종류
  dateName: string; // 명칭
  isHoliday: "Y" | "N"; // 공공기관 휴일여부
  locdate: number; // 날짜(YYYYMMDD)
  seq: number; // 순번
};

/**
 * @param year YYYY
 * @param month MM
 * @returns YYYYMMDD 형식의 배열(number[])
 */
export const nationalHolidays = ({ year, month }: { year: number; month?: number }) => {
  return new Promise<number[]>((resolve, rejecct) => {
    // 개인 인증 키. 변경 필요.
    const SERVICE_KEY = process.env.PUBLIC_DATA_SERVICE_KEY;
    if (!SERVICE_KEY) return;

    const xhr = new XMLHttpRequest();
    const url = "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo";

    let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + SERVICE_KEY;
    queryParams += "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");
    queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent(100);
    queryParams += "&" + encodeURIComponent("solYear") + "=" + encodeURIComponent(year);
    if (month) queryParams += "&" + encodeURIComponent("solMonth") + "=" + encodeURIComponent(month);

    xhr.open("GET", url + queryParams);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;

      if (xhr.status !== 200) rejecct(new Error("Request failed with status " + xhr.status));

      const items = JSON.parse(xhr.response).response.body.items.item as HolidayItem[];
      resolve(items.map((item) => item.locdate));
    };

    xhr.send();
  });
};
