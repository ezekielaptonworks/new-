import React from "react";
import { NestedData } from "./NestedData";

export default function TermsConditions() {
    return (
        <>
            <div>
                <h1>Branch2</h1>
                {NestedData.map((data, index) => <div key={data.heading}>
                    <div>{data.heading}</div>
                    {(!data.modifiedContent && !data.modifiedContentAnother) && <ul>
                        {data.content.map(content => <li>{content}</li>)}
                    </ul>}
                    {data.modifiedContent?.map(dataMod => <div>
                        <ul>
                            {dataMod.productFirstType.map(first => <li>{first}</li>)}
                        </ul>
                        {dataMod.guideLines.map(guideLine => <div>{guideLine}</div>)}
                        <ul>
                            {dataMod.productSecondType.map(second => <li>{second}</li>)}
                        </ul>
                    </div>)}
                    {data.modifiedContentAnother?.map(modified => <div>
                        <ul>
                            {modified.refundRules1.map(ruleOne => <li>{ruleOne}</li>)}
                        </ul>
                        <h3>{modified.heading1}</h3>
                        <ul>
                            {modified.refundRules2.map(ruleTwo => <li>{ruleTwo}</li>)}
                        </ul>
                        <h3>{modified.heading2}</h3>
                        <ul>
                            <li>{modified.lastRules}</li>
                        </ul>
                    </div>)}
                </div>)}
            </div>
        </>
    )
}