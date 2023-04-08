import Link from 'next/link';

function ShopLink({ id, children }) {
    return (
        <Link href={`/shops/${id}`}>
            <a>{children}</a>
        </Link>
    );
}

export default ShopLink;
