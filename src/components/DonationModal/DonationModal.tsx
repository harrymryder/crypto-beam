import React, { useEffect, useRef, useState } from "react";
import useHttp from "../../hooks/use-http";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from './DonationModal.module.scss';

import Input from "../Input/Input";
import { Box } from "@mui/material";

const API_KEY = '9b1fee36-8d3d-4103-96bd-9aa50845e865';
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const HEADERS = { 'X-CMC_PRO_API_KEY': API_KEY };


function DonationModal() {
    const { isLoading: isFetching, error, sendRequest: calculatePrice } = useHttp();
    // const { isLoading: isFetchingEth, error: ethError, sendRequest: calculateEth } = useHttp();
    // const { isLoading: isFetchingUsd, error: usdError, sendRequest: calculateUsd } = useHttp();
    const [cryptoAmount, setCryptoAmount] = useState('');
    const [fiatAmount, setFiatAmount] = useState('');

    //TODO: Refactor functions
    const fetchUsdPrice = async (id: number) => {
        let cryptoPriceInUsd: number;
        function fetchPrice(prices: any) {
            const data = prices.data;
            const item = data.find((item: any) => item.id === id);
            cryptoPriceInUsd = item.quote.USD.price;
            const conversion: string = (+fiatAmount / cryptoPriceInUsd).toFixed(2).toString();
            setCryptoAmount(conversion);
        }
        await calculatePrice({ url: URL, headers: HEADERS },
            fetchPrice,
        );
    }

    const fetchEthPrice = async (id: number) => {
        let fiatPriceInCrypto: number;
        function fetchPrice(prices: any) {
            const data = prices.data;
            const item = data.find((item: any) => item.id === id);
            fiatPriceInCrypto = item.quote.USD.price;
            const conversion: string = (+cryptoAmount * fiatPriceInCrypto).toFixed(2).toString();
            setFiatAmount(conversion);
        }
        await calculatePrice({ url: URL, headers: HEADERS },
            fetchPrice,
        );
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            // fetchUsdPrice(1027);
        }, 1000)

        return () => clearTimeout(timer)
    }, [fiatAmount]);

    useEffect(() => {
        const timer = setTimeout(() => {
            // fetchEthPrice(1027);
        }, 1000)

        return () => clearTimeout(timer)
    }, [cryptoAmount]);

    function handleDonation(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={handleDonation}>
            <Input
                id={'1'}
                type={'number'}
                label={'Amount in ETH'}
                onChange={(e: React.FormEvent<HTMLFormElement>) => setCryptoAmount(e.currentTarget.value)}
                value={cryptoAmount} />
            <Input
                id={'2'}
                type={'number'}
                label={'Amount in USD'}
                onChange={(e: React.FormEvent<HTMLFormElement>) => setFiatAmount(e.currentTarget.value)}
                value={fiatAmount} />
            <Box sx={{height: 24}} />
            <PrimaryButton text='Donate' onClick={handleDonation} />
        </form>
    );
}

export default DonationModal;