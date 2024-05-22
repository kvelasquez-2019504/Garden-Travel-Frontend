
import React, { useState } from 'react';
import { Input } from '../Input';

export const HotelReservation = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const hadleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <form className="form-add-hotel" id='reserv'>
                        <Input
                            label="Check In"
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            placeholder="Check In"
                            required={true}
                        />
                        <Input
                            label="Check Out"
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            placeholder="Check Out"
                            required={true}
                        />

                        <select style={{ backgroundColor: '#DADADA', width: '80%', padding: '10px', margin: '20px 0' }}
                            id="amenities"
                            name="amenities"
                            multiple
                            required={true}
                        >
                            {[
                                <option key="pool" value="Delux">Delux</option>,
                                <option key="pool" value="VIP">VIP</option>,
                                <option key="pool" value="Essentials">Essential</option>
                            ]}
                        </select>

                        <Input
                            label="Number of Rooms"
                            type="number"
                            id="numberOfRooms"
                            name="numberOfRooms"
                            placeholder="number of Rooms"
                            required={true}
                        />
                        <Input
                            label="Total"
                            type="number"
                            id="total"
                            name="total"
                            placeholder="Total"
                            required={true}
                        />
                        <a onClick={hadleModal} style={{ width: '80%',  margin: '10px 0' }} type="submit">Reserve</a>
                    </form>
                    {
                        modalIsOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <form className="form-add-hotel">
                                        <Input
                                            label="Card Number"
                                            type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            placeholder="Card Number"
                                            required={true}
                                        />
                                        <Input
                                            label="Cardholder Name"
                                            type="text"
                                            id="cardholderName"
                                            name="cardholderName"
                                            placeholder="Cardholder Name"
                                            required={true}
                                        />
                                        <Input
                                            label="Expiration Date"
                                            type="text"
                                            id="expirationDate"
                                            name="expirationDate"
                                            placeholder="MM/YY"
                                            required={true}
                                        />
                                        <Input
                                            label="CVV"
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            placeholder="CVV"
                                            required={true}
                                        />
                                        <button type="submit">Pay</button>
                                    </form>
                                    <a onClick={() => setModalIsOpen(false)} style={{ width: '80%', margin: '10px 0' }}>Close</a>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='image'>
                    <img src="https://s3-alpha-sig.figma.com/img/5766/b740/9ec7ce2389bdcaaae06451eee951fb60?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnKHEBTnAO83YXajhZmGJ7lDft0xwkXJ5b669GQ0~pbdR~sROFZudDM56LT1HZ-4iFpqRxEZSCN8AiIxFBeOwMYcGT~jKYcaQuswGUkXOAAmGPlIQMt3-ZyYe7MKOCsvaInTt3F9iIl66woFo~VZE5eUHc6UEQ2MqTM0inwXKpIaxn0IyhMVQQHAUlx79nAHAxmKZC8EU0xnleJ30aDsST2PZ0C~7139CnyM1a0Fc7TdIXctNgu3LZrVVay84E~UZccf-JiXyGHe34wOfNNoUQ89D0nj2w-WlnObGRx3RGVZdkVjwK1-nR1MzNZM3Db1QKGpi0QIUOd-hxQWTG6mYw__" alt="Hotel Room" />
                </div>
            </div>
        </>
    )
}