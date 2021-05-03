import React from "react";
import { Form, Button, Dropdown } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {useContext} from 'react';
import {Context} from '../../index';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
                {/* {device.types.map(type =>
                    <Dropdown.Item key={}
                )} */}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
