import React, { useContext } from 'react';
import { QuantityContext } from './QuantityContext';
import QuantityInput from './QuantityInput';

const Cartpage = () => {
  const { products } = useContext(QuantityContext);

  const totalQuantity = products.reduce((sum, product) => sum + product.quantity, 0);
  const totalAmount = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            {products.map(product => (
              <div className="card mb-4" key={product.id}>
                <div className="card-header py-3">
                  <h5 className="mb-0">{product.title}</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img
                          src={product.thumbnail}
                          className="w-100"
                          alt={product.title}
                        />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{product.title}</strong></p>
                      <p>{product.description}</p>
                      <p>Brand: {product.brand}</p>
                      <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remove item">
                        <i className="fas fa-trash"></i>
                      </button>
                      <button type="button" className="btn btn-danger btn-sm mb-2" title="Move to the wish list">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <QuantityInput productId={product.id} />
                      <p className="text-start text-md-center">
                        <strong>${product.price}</strong>
                      </p>
                    </div>
                  </div>
                  {product.id !== products[products.length - 1].id && <hr className="my-4" />}
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total Quantity
                    <span>{totalQuantity}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total Amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>${totalAmount.toFixed(2)}</strong></span>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cartpage;
