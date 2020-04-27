import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ViewBookmarks(props) {
  const [status, setStatus] = useState(true);

  const toggle = () => setStatus(!status);
  const links = JSON.parse(localStorage.getItem("Url"));

  return (
    <div>
      <Modal
        isOpen={status}
        toggle={toggle}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader toggle={toggle}>
          {" "}
          <h2>Bookmarks</h2>
        </ModalHeader>
        <ModalBody>
          {!links ? (
            <p>You have no bookmarks</p>
          ) : (
            <div>
              {links.map((link, i) => {
                return (
                  <li key={i}>
                    <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
                      {link}
                    </a>
                  </li>
                );
              })}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    /*  */
  );
}

export default ViewBookmarks;
