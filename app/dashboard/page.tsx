import { fetchRevenue } from "../lib/data";
import { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";


export default async function Page() {

    const revenue = await fetchRevenue();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
                {/* <Card title="Pending" value={totalPaidInvoices} type="pending" /> */}
                {/* <Card title="Invoices" value={totalPaidInvoices} type="invoices" /> */}
                {/* <Card
                    title="Total Customers"
                    value={totalPaidInvoices}
                    type="customers" 
                /> */}
            </div>
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
                <RevenueChart revenue={revenue} />
                {/* <LatestInvoices  latestInvoices={LatestInvoices} /> */}
            </div>
        </main>
    )
}