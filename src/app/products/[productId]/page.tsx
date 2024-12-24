import { notFound } from "next/navigation";

interface InfoParams {
   params: {
      productId: string;
   };
}

export default function Info({ params }: InfoParams) {
    if (parseInt(params.productId) > 5) {
        notFound();
    }

    return (
        <div>
            <p>Informações do produto {params.productId}</p> 
        </div>
    );
}