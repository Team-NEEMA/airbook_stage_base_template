import { Modal } from "flowbite";

export function modal({ _modalElt, _options }) {
  const flowbite = {};

  // set the element that trigger the dropdown menu on click
  flowbite.modal = document.querySelectorAll(_modalElt);

  //options
  flowbite.options = _options || {
    placement: "center",
    backdrop: "dynamic",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    closable: true,
    onHide: () => {
      console.log("modal is hidden");
    },
    onShow: () => {
      console.log("modal is shown");
    },
    onToggle: () => {
      console.log("modal has been toggled");
    },
  };

  const modal = new Modal(flowbite.modal, flowbite.options);

  return modal;
}
