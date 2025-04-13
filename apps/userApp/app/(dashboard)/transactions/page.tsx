import { Card } from "@repo/ui/Card"
import { CardElement } from "../../CardElement"
import { Center } from "../../../../../packages/ui/src/component/Center"
import { getSession } from "next-auth/react"
import { OnRamping_card } from "../../../components/OnRampingtransaction_card"
import { P2ptransactions_card } from "../../../components/P2ptransactions_card"

export default function ()
{
    
    return <>
{/* Tido */}
{/* create the toggle able card that consist both thr Transactions if this is from the onRamp get the red for loss and green for thee obtained money and if the money is  */}
<Transactions/>
    </>
}
function Transactions()
{
    return <>
    <div className="max-w-screen">
        <Card title="Transactions">
            <OnRamping_card/>
            <P2ptransactions_card/>
        </Card>
    </div>
    
    </>
}
