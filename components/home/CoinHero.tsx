import React from 'react';
import Image from 'next/image';
import { formatCurrency, formatPercentage } from '@/lib/utils';
import { TrendingDown, TrendingUp, Activity, BarChart2, DollarSign, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CoinHeroProps {
    coin: CoinDetailsData;
}

const CoinHero = ({ coin }: CoinHeroProps) => {
    const isTrendingUp = coin.market_data.price_change_percentage_24h > 0;

    return (
        <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl border border-gray-800/50">
            {/* Background Glow Effects */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col gap-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                        <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full border-4 border-gray-800 shadow-lg bg-gray-900 flex items-center justify-center">
                            <Image
                                src={coin.image.large}
                                alt={coin.name}
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
                                {coin.name}
                            </h1>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium uppercase tracking-wider border border-gray-700">
                                    {coin.symbol}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-sm font-medium border border-gray-700">
                                    Rank #{coin.market_cap_rank}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-left md:text-right">
                        <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                            {formatCurrency(coin.market_data.current_price.usd)}
                        </div>
                        <div className={cn(
                            "flex items-center gap-2 mt-2 text-xl font-bold md:justify-end",
                            isTrendingUp ? "text-emerald-400" : "text-rose-500"
                        )}>
                            {isTrendingUp ? <TrendingUp size={28} /> : <TrendingDown size={28} />}
                            {formatPercentage(coin.market_data.price_change_percentage_24h)} (24h)
                        </div>
                    </div>
                </div>

                {/* Grid Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    <StatCard
                        label="Market Cap"
                        value={formatCurrency(coin.market_data.market_cap.usd)}
                        icon={<DollarSign className="text-blue-400" size={24} />}
                    />
                    <StatCard
                        label="24h Volume"
                        value={formatCurrency(coin.market_data.total_volume.usd)}
                        icon={<Activity className="text-purple-400" size={24} />}
                    />
                    <StatCard
                        label="24h High"
                        value={formatCurrency(coin.market_data.high_24h.usd)}
                        icon={<BarChart2 className="text-emerald-400" size={24} />}
                    />
                    <StatCard
                        label="24h Low"
                        value={formatCurrency(coin.market_data.low_24h.usd)}
                        icon={<Layers className="text-red-400" size={24} />}
                    />
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
    <div className="flex flex-col gap-1 p-5 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/60 transition-colors group">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gray-900/50 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <span className="text-gray-400 font-medium text-sm">{label}</span>
        </div>
        <span className="text-2xl font-bold text-white tracking-wide ml-1">{value}</span>
    </div>
);

export default CoinHero;
