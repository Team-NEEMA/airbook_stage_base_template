<template>
  <!-- Modal toggle -->
  <div class="grid p-0 m-0 justify-items-center">
    <button
      @click.prevent="openModalCreateContact"
      data-modal-target="ModalCreateContact"
      data-modal-toggle="ModalCreateContact"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      <i class="fa-solid fa-plus"></i>Create New Contact
    </button>
  </div>

  <div>
    <div>
      <div
        class="relative first-line pl-6 pr-6 bg-red-50 overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table
          class="w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">name</th>
              <th scope="col" class="px-6 py-3">first name</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Associated account</th>
              <th scope="col" class="px-6 py-3">Categorie</th>
              <th scope="col" class="px-6 py-3">Modify</th>
              <th scope="col" class="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="user.id"
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ user.name }}
              </th>
              <td class="px-6 py-4">
                {{ user.firstname }}
              </td>
              <td class="px-6 py-4">
                {{ user.email }}
              </td>
              <td class="px-6 py-4">
                {{ user.account }}
              </td>
              <td class="px-6 py-4">
                {{ user.categorie }}
              </td>
              <td class="px-6 py-4">
                <button
                  @click.prevent="updateModalCreateContact(user.id)"
                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Modify
                </button>
              </td>
              <td class="px-6 py-4">
                <button
                  @click.prevent="removeContactModal(user.id)"
                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Main modal -->
  <div
    id="ModalCreateContact"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ modal_title }}
          </h3>
          <button
            @click="closeModalCreateContact"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="ModalCreateContact"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <form @submit.prevent="save">
            <input type="hidden" v-model="user.id" />
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Name</label
                >
                <input
                  type="text"
                  v-model="user.name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Reddington"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Firstname</label
                >
                <input
                  type="text"
                  v-model="user.firstname"
                  id="firstName"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Raymond"
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Account</label
              >
              <input
                type="email"
                v-model="user.email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@neema.com"
                required
              />
            </div>

            <div class="mb-6">
              <label
                for="account"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Select the corresponding Account</label
              >
              <select
                id="account"
                v-model="user.account"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>No Account</option>
                <option v-for="nameAc in nameAc">{{ nameAc.name }}</option>
              </select>
            </div>

            <div class="mb-6">
              <label
                for="categorie"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Select your Categorie</label
              >
              <select
                id="categorie"
                v-model="user.categorie"
                required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Corporate</option>
                <option>Government</option>
                <option>Individual</option>
                <option>Sub Agent</option>
                <option>Othert</option>
              </select>
            </div>
            <button
              data-modal-hide="ModalCreateContact"
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </form>
        </div>
        <!-- Modal footer -->
        <!-- <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="ModalCreateContact" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>-->
      </div>
    </div>
  </div>

  <div
    id="remove"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          @click.prevent="close"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="remove"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <svg
            aria-hidden="true"
            class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this Contact?
          </h3>
          <button
            data-modal-hide="remove"
            type="button"
            @click.prevent="deleteC"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Yes, I'm sure
          </button>
          <button
            data-modal-hide="remove"
            type="button"
            @click.prevent="close"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount, reactive, ref } from "vue";
import axios from "axios";
import { Modal } from "flowbite";
import { v4 as uid } from "uuid";

const modals = reactive({ create_contact: "" });
const mod = reactive({ remove_contact: "" });

const user = ref({
  id: "",
  name: "",
  firstname: "",
  email: "",
  account: "",
  categorie: "",
});

const users = reactive([]);
const nameAc = ref();
const modal_title = ref("New Contact");
//// traitement du formumaire
const save = () => {
  if (!user.value.id) {
    user.value.id = uid();

    axios //axios permet de lie le back-end au front-end. Dans ce cas specifique il permet de d'ajouter un nouveau ontact par la methode post.
      .post("http://localhost:3000/contact", user.value)
      .then((response) => {
        console.log(response);

        users.push(response.data);
        user.value = {};
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    const foundIndex = users.findIndex((_user) => _user.id == user.value.id);
    users[foundIndex] = user.value;
    axios //axios permet de lie le back-end au front-end. Dans ce cas specifique il permet de modifier un contact par la methode patch.
      .patch("http://localhost:3000/contact/" + user.value.id, user.value)
      .then((response) => {
        console.log(response);

        user.value = {};
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Pour fermer une fois cliq
  //closeModal()
};
const deleteC = () => {
  // C'est cette fonction delete qui permet de supprimer un contact dans la base de données
  const foundIndex = users.findIndex((_user) => _user.id == user.value.id);
  users[foundIndex] = user.value;
  axios // axios permet de lie le back-end au front-end. Dans ce cas specifique il permet de delete un contact par la methode delete en fonction de l'id
    .delete("http://localhost:3000/contact/" + user.value.id, user.value)
    .then((response) => {
      console.log(response);
      mod.remove_contact.hide();
    })
    .catch((error) => {
      console.log(error);
    });
  window.location.reload();
};

const openModalCreateContact = () => {
  modal_title.value = "New Contact";
  modals.create_contact.show();
};
const updateModalCreateContact = (userid) => {
  modal_title.value = "Modify Contact";
  modals.create_contact.show();

  user.value = users.find((user) => user.id === userid);
  console.log(user.value);
};
// modal qui s'affiche lorsqu'on veut supprimer un contact
const removeContactModal = (userid) => {
  mod.remove_contact.show();
  user.value = users.find((user) => user.id === userid);
  console.log(user.value);
};
const close = () => {
  mod.remove_contact.hide();
};
const closeModalCreateContact = () => {
  modals.create_contact.hide();
};
// Cette fonction permet de recuperer tout les contact et ils sont chargées dans la fonction onBeforeMont
const getData = () => {
  axios
    .get("http://localhost:3000/contact")
    .then(({ data }) => {
      users.push(...data);
    })
    .catch((error) => {
      console.log(error);
    });
};
// Cette fonction permet de recuperer tout les noms des comptes
const getNameAccount = () => {
  axios
    .get("http://localhost:3000/account/name")
    .then(({ data }) => {
      nameAc.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(nameAc);
};

onBeforeMount(() => {
  getData();
  getNameAccount();
});

onMounted(() => {
  const modalElt = document.querySelector("#ModalCreateContact");
  const eltModal = document.querySelector("#remove");
  const options = {
    placement: "center",
    backdrop: "static",
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
  modals.create_contact = new Modal(modalElt, options); //modal("ModalCreateLeads");
  mod.remove_contact = new Modal(eltModal, options);
});
</script>
