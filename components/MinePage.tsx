import React from "react";
import Score from "./Score";
import UpgradeProfit from "./UpgradeProfit";

export default function MinePage() {
    return (
        <div className=" bg-transparent rounded-t-[36px] pt-1 px-2 flex flex-col gap-4">
            <div className="px-2">
                <UpgradeProfit />
            </div>
        </div>
    );
}
