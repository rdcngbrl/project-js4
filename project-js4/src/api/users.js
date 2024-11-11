import api from './config.js'


function getSubscriptionList(successCallback, errorCallback) {
  api.get(`/subscriptions`).then(({data}) => {
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    })
    .catch((err) => {
      if (typeof successCallback === 'function') {
        errorCallback(err);
      }
    });
}

function getSubscriptionById(id, onSuccess, onError){
  api.get(`/subscriptions/${id}`)
    .then(response => {
      if (response.status === 200) {
        onSuccess(response.data);
      }else {
        onError(`Error: ${response.status} - ${response.statusText}`);
      }
    })
    .catch(error => {
      onError(`Error: ${error.message}`);
    });
};





function updateUser(id, data, successCallback, errorCallback) {
  api.put(`/users/${id}`, data)
    .then(({data}) => {
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    })
    .catch((err) => {
      if (typeof successCallback === 'function') {
        errorCallback(err);
      }
    });
}





function loginUser(
  username,
  password,
  loginCallback,
  errorCallback = (err) => console.log(err)
) {

  api.get(`/users?password=${password}&username=${username}`)
    .then(({data}) => {
      loginCallback(data[0]);
    })
    .catch((err) => errorCallback(err));
}



function addUser(data, successCallback, errorCallback) {
  api.post(`/users`, data)
    .then(({ data }) => {
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    })
    .catch((err) => {
      if (typeof errorCallback === 'function') {
        errorCallback(err); // Call errorCallback instead of successCallback
      }
    });
}



function resetPassword(email, successCallback, errorCallback) {
  api.get(`/users?email=${email}`)
    .then(({ data }) => {
      if (data.length > 0) {
        successCallback(data[0].id); // Return the user ID
      } else {
        errorCallback('Email not found');
      }
    })
    .catch((err) => {
      errorCallback(err);
    });
}

function updatePassword(email, newPassword, successCallback, errorCallback) {
  api.get(`/users?email=${email}`)
    .then(({ data }) => {
      if (data.length > 0) {
        const userId = data[0].id;
        const userData = data[0];
        userData.password = newPassword;
        api.put(`/users/${userId}`, userData)
          .then(({ data }) => {
            successCallback(data);
          })
          .catch((err) => {
            errorCallback(err);
          });
      } else {
        errorCallback('Email not found');
      }
    })
    .catch((err) => {
      errorCallback(err);
    });
}


function sendContactForm(data, successCallback, errorCallback) {
  api.post('/contact-us', data)
    .then(({ data }) => {
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    })
    .catch((err) => {
      if (typeof errorCallback === 'function') {
        errorCallback(err);
      }
    });
}





function getUserSubscription(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  api.get(`/subscriptions/?id=${id}`)
    .then(({data}) => {
      successCallback(data[0]);
    })
    .catch((err) => errorCallback(err));
}







function getUser(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  api.get(`/users/${id}`)
    .then(({data}) => {
      successCallback(data);
    })
    .catch((err) => errorCallback(err));
}






 
 function getUsersList(successCallback, errorCallback) {
  api.get(`/users`).then(({data}) => {
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    })
    .catch((err) => {
      if (typeof successCallback === 'function') {
        errorCallback(err);
      }
    });
}

function deleteUser(id, successCallback, errorCallback) {
  api.delete(`/users/${id}`)
    .then(({data}) => {
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    })
    .catch((err) => {
      if (typeof successCallback === 'function') {
        errorCallback(err);
      }
    });
}

export { sendContactForm,getSubscriptionById, getSubscriptionList, loginUser, addUser, updatePassword, resetPassword, getUsersList, deleteUser, getUser, updateUser, getUserSubscription };