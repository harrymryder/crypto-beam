import { useParams } from "react-router-dom";
import ViewContainer from "../../../components/ViewContainer/ViewContainer";
import CAMPAIGNS from "../../../data/Campaigns";

const CampaignDetailView = () => {
    const params = useParams();
    const campaignId = params.campaignId;
    const campaign = CAMPAIGNS.find(campaign => campaign.id.toString() === campaignId);

    console.log(campaign?.id);

    return (
        <ViewContainer>
            <h1>{campaign?.id}</h1>
        </ViewContainer>
    );
}

export default CampaignDetailView;