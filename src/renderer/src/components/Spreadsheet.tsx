import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import { useState } from "react";

const Spreadsheet = () => {
    // FortuneSheet의 데이터 구조: 시트 정보의 배열
    const [data, setData] = useState<any[]>([
        {
            name: "Sheet1",
            status: 1, // 활성화된 시트
            order: 0,
            celldata: [
                { r: 0, c: 0, v: { v: "데이터", m: "데이터" } },
                { r: 0, c: 1, v: { v: "수식 예시", m: "수식 예시" } },
                { r: 1, c: 0, v: { v: 100, m: "100" } },
                { r: 1, c: 1, v: { v: "=A2*2", m: "200", f: "=A2*2" } },
            ],
            config: {},
        }
    ]);

    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden"
        }}>
            <Workbook
                data={data}
                onChange={(newData) => {
                    setData(newData);
                }}
                // 엑셀과 거의 동일한 기능을 위해 툴바, 수식입력줄 등을 표시
                showToolbar={true}
                showSheetTabs={true}
                showFormulaBar={true}
                lang="en"
            />
        </div>
    );
};

export default Spreadsheet;
