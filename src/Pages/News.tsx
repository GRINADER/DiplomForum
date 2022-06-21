import React from "react";
import { Form, Placeholder } from "react-bootstrap";

// export const getNews = async () => {
//   const response = await $api.get(`Post/getPosts?skip=0&take=50`);
//   return response.data;
// }

export const News = () => (
  <>
    {/* <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form> */}
    <div className="card width: 18rem; mt-2 mb-2">
      <div className="card-body">
        <h5 className="card-title">Id карточки: 1</h5>
        <h5 className="card-title">sdfsdfa</h5>
        <p className="card-text">
            dfsfd
        </p>
        <p>Дата создания: 2022-05-22T20:47:31.997Z</p>
      </div>
    </div>
    <div className="card width: 18rem; mt-2 mb-2">
      <div className="card-body">
        <h5 className="card-title">Id карточки: 2</h5>
        <h5 className="card-title">dfgdfgd</h5>
        <p className="card-text">
            fgdfgd
        </p>
        <p>Дата создания: 2022-05-22T21:00:22.476Z</p>
      </div>
    </div>
    <div className="card width: 18rem; mt-2 mb-2">
      <div className="card-body">
        <h5 className="card-title">Id карточки: 3</h5>
        <h5 className="card-title">string</h5>
        <p className="card-text">
            string
        </p>
        <p>Дата создания: 2022-05-29T06:14:22.089Z</p>
      </div>
    </div>
  </>
);
