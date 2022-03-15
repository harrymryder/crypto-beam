import { useParams } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import ViewContainer from "../../../components/ViewContainer/ViewContainer";
import CAMPAIGNS from "../../../data/Campaigns";
import PEOPLE from "../../../data/People";
import Person from "../../../models/person";
import { useState } from "react";

import Modal from '../../../components/Modal/Modal';

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

    function handleOk() {
        setIsModalVisible(false);
    };

    function handleCancel() {
        setIsModalVisible(false);
    };

    return (
        <ViewContainer>
            <h6>{campaign?.id}</h6>
            <h1>{person?.firstName}</h1>
            <p>Address: {person?.address}</p>
            <PrimaryButton text={'Donate'} onClick={showModal} />

            {isModalVisible && <Modal onClose={hideModal}>
                <div>Donate</div>
            </Modal>}
        </ViewContainer>
    );
}

export default CampaignDetailView;