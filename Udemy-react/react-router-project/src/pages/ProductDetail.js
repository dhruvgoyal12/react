import React from "react";
import { useParams } from "react-router";

export default function ProductDetail() {
  const params = useParams();

  return (
    <div>
      Product Detail
      <p>{params.productId}</p>
    </div>
  );
}
