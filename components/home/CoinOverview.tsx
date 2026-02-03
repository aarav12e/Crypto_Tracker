import React from 'react';
import { fetcher } from '@/lib/coingecko.actions';
import { CoinOverviewFallback } from './fallback';
import CoinHero from './CoinHero';

const CoinOverview = async () => {
  try {
    // Only fetch coin details, NO OHLC data (prevents 400/429 errors)
    const coin = await fetcher<CoinDetailsData>('/coins/bitcoin');

    return (
      <div id="coin-overview" className="w-full">
        <CoinHero coin={coin} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching coin overview:', error);
    return <CoinOverviewFallback />;
  }
};

export default CoinOverview;