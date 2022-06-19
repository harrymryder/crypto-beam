import { useParams } from "react-router-dom";
import AppButton from "../../../core/components/AppButton/AppButton";
import ViewContainer from "../../../core/components/ViewContainer/ViewContainer";
import CAMPAIGNS from "../../../data/Campaigns";
import PEOPLE from "../../../data/People";
import { useState } from "react";

import Modal from '../../../core/components/Modal/Modal';
import { Http2ServerRequest } from "http2";
import useHttp from "../../../core/hooks/use-http";
import AppModal from "../../../core/components/AppModal/AppModal";

const API_KEY = '9b1fee36-8d3d-4103-96bd-9aa50845e865';
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const HEADERS = { 'X-CMC_PRO_API_KEY': API_KEY };

const CampaignDetailView = () => {
    const params = useParams();
    const campaignId = params.campaignId;
    const campaign = CAMPAIGNS.find(campaign => campaign.id.toString() === campaignId);
    const person = PEOPLE.find(person => person.id === campaign?.personId);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal() {
        setIsModalVisible(true);
    };

    function hideModal() {
        setIsModalVisible(false);
    }

    return (
        <ViewContainer>
            <h6>{campaign?.id}</h6>
            <h1>{person?.firstName}</h1>
            <p>Address: {person?.address}</p>
            <AppButton text={'Donate'} onClick={showModal} />
            {isModalVisible && <Modal onClose={hideModal} title='Enter amount to donate' >
                <AppModal />
            </Modal>}
        </ViewContainer>
    );
}

export default CampaignDetailView;