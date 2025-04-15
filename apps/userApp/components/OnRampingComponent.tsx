import { Card } from "@repo/ui/Card"
import { CardElement } from "../app/CardElement"
import { Prisma } from "@prisma/client"

type OnRampTransaction = {
    id: number,
    status: string,
    amount: number,
    startTime: Date,
    userId: number
};
export const OnRampingComponent = ({ onRampingtransactions }: { onRampingtransactions: OnRampTransaction[] }) => {
    return (<>
        <Card title="Transaction">
            <div >
                {/*Do this loop for the onRampingTransactions  */}
                {onRampingtransactions.map((element: any) => {
                    return (
                        <div key={element.id}>

                            <div className="flex justify-between border-b border-slate-300 pb-2">

                                <div className="flex flex-col">
                                    
                                    <div className="flex flex-col text-sm">
                                        <div>
                                            {(element.startTime).toLocaleDateString()}
                                        </div>
                                        <div>
                                            {(element.startTime).toLocaleTimeString()}
                                        </div>

                                    </div>

                                </div>
                                <div className="flex flex-col items-end text-end ">
                                    <div>
                                        Rs {element.amount / 100}
                                    </div>
                                    <div className="flex justify-end items-end text-end">
                                        {
                                            (element.status === "Processing" || element.status === "Failure")
                                                ? <span className="text-red-500 font-bold">Failed</span>
                                                : <span className="text-green-500 font-bold">Success</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Card>
    </>)
} 