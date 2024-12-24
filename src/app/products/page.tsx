import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Produtos',
}

export default function Products() {

    const id = 1;
    return (
        <div>
            <Link href={`/products/${id}`}>produto 1</Link>
            <Link href={'/products/2'}>produto 2</Link>
            <Link href={'/products/3'}>produto 3</Link>
        </div>
    );
}