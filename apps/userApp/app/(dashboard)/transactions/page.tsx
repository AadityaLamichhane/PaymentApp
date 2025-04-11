import { Card } from "@repo/ui/Card"
import { CardElement } from "../../CardElement"
import { Center } from "../../../../../packages/ui/src/component/Center"

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
          
        </Card>
    </div>
    
    </>
}