import React, { useRef, useState } from "react";
import useHttp from "../../hooks/use-http";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const API_KEY = '9b1fee36-8d3d-4103-96bd-9aa50845e865';
const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const HEADERS = { 'X-CMC_PRO_API_KEY': API_KEY };

function DonationModal() {
    const { isLoading: isFetching, error, sendRequest: calculatePrice } = useHttp();
    // const { isLoading: isFetchingEth, error: ethError, sendRequest: calculateEth } = useHttp();
    // const { isLoading: isFetchingUsd, error: usdError, sendRequest: calculateUsd } = useHttp();
    const [cryptoAmount, setCryptoAmount] = useState('0');
    const [fiatAmount, setFiatAmount] = useState('0');

    const fiatRef = useRef();
    const cryptoRef = useRef();

    //TODO: Only run function when user stops typing

    let cryptoPriceInUsd: number;

    const getPriceInUsd = async (id: number) => {
        function fetchPrice(prices: any) {
            const data = prices.data;
            const currency = data.find((item: any) => item.id === id);
            cryptoPriceInUsd = currency.quote.USD.price;
        }
        await calculatePrice({ url: URL, headers: HEADERS },
            fetchPrice,
        );
    }

    function handleCryptoOnChange(event: React.FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setCryptoAmount(value);
    }

    const handleFiatOnChange = async (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setFiatAmount(value);
        await getPriceInUsd(1027);
        console.log('Fiat: ' + fiatAmount);
        const conversion = +fiatAmount / cryptoPriceInUsd;
        setCryptoAmount(conversion.toFixed(2).toString());
    }

    function handleDonation(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Eth: ' + cryptoAmount);
        console.log('Usd: ' + fiatAmount);
    }

    return (
        <React.Fragment>            
            <form onSubmit={handleDonation}>
                <label>Amount in ETH</label>
                <input name='cryptoAmount' type='number' onChange={handleCryptoOnChange} value={cryptoAmount}></input>
                <label>Amount in USD</label>
                <input name='usdAmount' type='number' onChange={handleFiatOnChange} value={fiatAmount}></input>
                <PrimaryButton text='Donate' onClick={handleDonation} />
            </form>
        </React.Fragment>
    );
}

export default DonationModal;