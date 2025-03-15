import Link from "next/link";

export default function Page() {
    return (
        <>
            <p>Dashboard Page</p>
            <Link href={'/dashboard/customers'}>Customers</Link>
            <Link href={'/dashboard/invoices'}>Invoices</Link>
        </>
    )
}