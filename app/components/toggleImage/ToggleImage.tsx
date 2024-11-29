"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ToggleImage.module.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function ToggleImage({ params }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  function handleMaximize() {
    onOpen();
    console.log(isOpen);
  }

  if (!toggled) {
    return (
      <div
        onClick={() => handleClick()}
        className={`${styles.imageToggle} text-accent`}
      >
        {" "}
        <span className={`${styles.toggleStyles}`}>
          <FontAwesomeIcon icon={faCaretRight} fixedWidth></FontAwesomeIcon>
          <div className={`${styles.toggleText}`}>
            Image — {params.imageAltText}
          </div>
        </span>
      </div>
    );
  }

  if (toggled) {
    return (
      <div className={`${styles.imageToggle} text-accent`}>
        <span
          onClick={() => handleClick()}
          className={`${styles.toggleStyles}`}
        >
          <FontAwesomeIcon icon={faCaretDown} fixedWidth></FontAwesomeIcon>
          <div className={`${styles.toggleText}`}>
            Image — {params.imageAltText}
          </div>
        </span>
        <Image
          onClick={() => handleMaximize()}
          className={`${styles.imageStyles}`}
          src={params.imagePath}
          width={params.width}
          height={params.height}
          sizes={params.sizes}
          style={params.style}
          alt={params.imageAltText}
          decoding="sync"
        ></Image>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="5xl"
          scrollBehavior="inside"
          backdrop="blur"
          classNames={{
            backdrop: "bg-primary/50 backdrop-opacity-90",
            base: "border-accent bg-primary dark:bg-primary text-accent",
            header: "border-b-[1px] border-accent",
            footer: "border-t-[1px] border-accent",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {params.imageAltText}
                </ModalHeader>
                <ModalBody>
                  <Image
                    onClick={() => handleMaximize()}
                    className={`${styles.imageStyles}`}
                    src={params.imagePath}
                    width={params.width}
                    height={params.height}
                    sizes={params.sizes}
                    style={params.style}
                    alt={params.imageAltText}
                    decoding="sync"
                  ></Image>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  }
}

export default ToggleImage;
