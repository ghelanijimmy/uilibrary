import React, { Fragment, useState } from "react";
import Modal from "../Modal";
import Button from "../../Button/Button";
import { colorStyles, sizes } from "../../../constants/constants";
import Paragraph from "../../Typography/Paragraph";
import Card from "../../Card/Card";

const { PRIMARY, SECONDARY } = colorStyles;
const { LG } = sizes;

export default {
  title: "Modal/CSF",
  component: Modal,
  argTypes: {
    showModal: {
      type: "boolean",
      control: "boolean",
    },
    onCloseCallback: {
      type: "function",
      control: null,
    },
    bgColor: {
      type: "string",
      control: "color",
    },
  },
};

const Template = (args) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => setOpenModal(!openModal);

  return (
    <Fragment>
      <Modal
        onCloseCallback={handleModalClick}
        showModal={
          (typeof args.showModal === "boolean" && args.showModal) || openModal
        }
        bgColor={args.bgColor}
      >
        <Card>
          <Paragraph size={LG} color={SECONDARY}>
            Modal Title
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium architecto at eos error et eveniet illo magnam omnis
            rerum sunt?
          </Paragraph>
        </Card>
      </Modal>
      <Button
        handleClick={handleModalClick}
        text="Open"
        type={PRIMARY}
        size="lg"
      />
    </Fragment>
  );
};

export const DefaultModal = Template.bind({});
