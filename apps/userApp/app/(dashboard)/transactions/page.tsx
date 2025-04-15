import { Card } from "@repo/ui/Card"
import { OnRamping_card } from "../../../components/OnRampingtransaction_card"
import { P2ptransactions_card } from "../../../components/P2ptransactions_card"
export default function ()
{
    return <>
    <div className="max-w-screen flex gap-9">

        <div className="max-h-400">
            <Card title="person transactions" >
                <P2ptransactions_card/>
            </Card>
        </div>
    </div>
    </>
}
