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
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

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
        className={`${styles.imageCollapsed} text-accent bg-subtle`}
      >
        <div className={`${styles.imageHeader}`}>
          <FontAwesomeIcon icon={faImage} fixedWidth={true}></FontAwesomeIcon>
          <div className={`${styles.toggleText} text-white`}>
            {params.imageAltText}
          </div>
        </div>
        <FontAwesomeIcon icon={faCaretLeft} fixedWidth></FontAwesomeIcon>
      </div>
    );
  }

  if (toggled) {
    return (
      <div className={`text-accent`}>
        {/* Image Header */}
        <span
          onClick={() => handleClick()}
          className={`${styles.imageCollapsed} bg-subtle`}
        >
          <div className={`${styles.imageHeader}`}>
            <FontAwesomeIcon icon={faImage} fixedWidth></FontAwesomeIcon>
            <div className={`${styles.toggleText} text-white`}>
              {params.imageAltText}
            </div>
          </div>
          <FontAwesomeIcon icon={faCaretDown} fixedWidth></FontAwesomeIcon>
        </span>
        {/* Image */}
        <div className={`${styles.imageWrapper} text-accent`}>
          <Image
            onClick={() => handleMaximize()}
            className={`${styles.imageStyles}`}
            src={params.imagePath}
            width={params.width}
            height={params.height}
            sizes={params.sizes}
            style={params.style}
            alt={params.imageAltText}
            quality={100}
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
      </div>
    );
  }
}

export default ToggleImage;
