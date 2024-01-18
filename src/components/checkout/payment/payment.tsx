import "./payment.scss";

interface IPaymentProps {
  cartTotalPrice: number;
}

export const Payment = (props: IPaymentProps) => {
  return (
    <>
      <div>
        <div className="checkout" id="main__checkout">
          <div className="checkout__formcontainer" id="formcontainer">
            <div className="checkout__container">
              <form action="" id="form">
                <div className="checkout__container__column">
                  <h3>Leveransinformation</h3>
                  <div className="checkout__container__inputcontainer">
                    <span>Namn :</span>
                    <input type="text" placeholder="Kalle Anka" />
                  </div>
                  <div className="checkout__container__inputcontainer">
                    <span>Email :</span>
                    <input
                      type="text"
                      placeholder="Kalle.anka@Ankeborg.se"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="checkout__container__inputcontainer">
                    <span>Adress :</span>
                    <input
                      type="text"
                      placeholder="Ankeborgsvägen 3"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="checkout__container__inputcontainer">
                    <span>Telefonnummer :</span>
                    <input type="number" placeholder="0707 12 34 56" />
                  </div>
                  <div className="checkout__container__flex">
                    <div className="checkout__container__inputcontainer">
                      <span>Postnummer :</span>
                      <input type="text" placeholder="111 11" />
                    </div>
                    <div className="checkout__container__inputcontainer">
                      <span>Postort :</span>
                      <input type="text" placeholder="Ankeborg" />
                    </div>
                  </div>
                </div>
                <div className="checkout__container__column">
                  <h3>Betalning</h3>
                  <div className="checkout__container__inputcontainer">
                    <span>Kort som vi tar emot :</span>
                    <img
                      src="https://e7.pngegg.com/pngimages/678/81/png-clipart-visa-and-master-cards-mastercard-money-foothills-florist-business-visa-visa-mastercard-text-service.png"
                      alt="bild"
                    />
                  </div>
                  <div className="checkout__container__inputcontainer">
                    <span>Namn på kortet :</span>
                    <input type="text" placeholder="Kalle Anka" />
                  </div>

                  <div className="checkout__container__inputcontainer">
                    <span>Kortnummer :</span>
                    <input type="number" placeholder="1111 2222 3333 4444" />
                  </div>

                  <div className="checkout__container__flex">
                    <div className="checkout__container__inputcontainer">
                      <span>Månad :</span>
                      <select name="" id="">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                    <div className="checkout__container__inputcontainer">
                      <span>År :</span>
                      <select name="" id="">
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                      </select>
                    </div>
                    <div className="checkout__container__inputcontainer">
                      <span>CVV :</span>
                      <input type="number" placeholder="123" />
                    </div>
                  </div>
                </div>
                <div className="pricediv">
                  <h3>Att betala: {props.cartTotalPrice}kr</h3>
                  <button
                    className="checkout__container__submit"
                    id="checkoutsubmit"
                  >
                    Slutför köp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
