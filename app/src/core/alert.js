export default {

  success (message) {
    this.message('success', 'Erfolgreich', message)
  },

  error (message) {
    this.message('error', 'Fehler', message)
  },

  info (message) {
    this.message('info', 'Information', message)
  },

  warning (message) {
    this.message('warning', 'Warnung', message)
  },

  unsavedData (save, cancel) {
    window.vue.$swal.fire({
      title:
      '<span class="modal__title">' +
        '<svg class="modal__title__icon"><use xlink:href="/images/sprite.svg#icon-question-mark"></use></svg>' +
        'Ungespeicherte Daten' +
      '</span>',
      text: 'Es gibt noch Daten, die nicht gespeichert wurden. Wollen Sie diese Speichern?',
      type: false,
      showCancelButton: true,
      cancelButtonText: 'Abbrechen',
      confirmButtonText: 'Speichern',
      confirmButtonColor: false,
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        container: 'sweet-alert2',
        popup: 'sweet-alert2__modal',
        header: 'sweet-alert2__header are-you-sure',
        title: 'sweet-alert2__title-bar',
        closeButton: 'close-button-class',
        content: 'sweet-alert2__content',
        actions: 'sweet-alert2__actions',
        confirmButton: 'btn btn-modal-primary are-you-sure',
        cancelButton: 'btn btn-modal-secondary'
      }
    }).then((result) => {
      if (result.value) {
        save()
      } else {
        cancel()
      }
    })
  },

  areYouSure (message, callback) {
    window.vue.$swal.fire({
      title:
      '<span class="modal__title">' +
        '<svg class="modal__title__icon"><use xlink:href="/images/sprite.svg#icon-question-mark"></use></svg>' +
        'Achtung' +
      '</span>',
      text: message,
      type: false,
      showCancelButton: true,
      cancelButtonText: 'Abbrechen',
      confirmButtonText: 'Ja',
      confirmButtonColor: false,
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        container: 'sweet-alert2',
        popup: 'sweet-alert2__modal',
        header: 'sweet-alert2__header are-you-sure',
        title: 'sweet-alert2__title-bar',
        closeButton: 'close-button-class',
        content: 'sweet-alert2__content',
        actions: 'sweet-alert2__actions',
        confirmButton: 'btn btn-modal-primary are-you-sure',
        cancelButton: 'btn btn-modal-secondary'
      }
    }).then((result) => {
      if (result.value) {
        callback()
      }
    })
  },

  delete (message, callback) {
    window.vue.$swal.fire({
      title:
      '<span class="modal__title">' +
        '<svg class="modal__title__icon"><use xlink:href="/images/sprite.svg#icon-trash"></use></svg>' +
        'Löschen' +
      '</span>',
      text: message,
      type: false,
      showCancelButton: true,
      cancelButtonText: 'Abbrechen',
      confirmButtonText: 'Löschen',
      confirmButtonColor: false,
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        container: 'sweet-alert2',
        popup: 'sweet-alert2__modal',
        header: 'sweet-alert2__header delete',
        title: 'sweet-alert2__title-bar',
        closeButton: 'close-button-class',
        content: 'sweet-alert2__content delete',
        actions: 'sweet-alert2__actions',
        confirmButton: 'btn btn-modal-primary delete',
        cancelButton: 'btn btn-modal-secondary'
      }
    }).then((result) => {
      if (result.value) {
        callback()
      }
    })
  },

  message (type, title, message) {
    window.vue.$swal.fire({
      type: type,
      title: title,
      text: message
    })
  },

  messageHtml (type, title, message) {
    window.vue.$swal.fire({
      type: type,
      title: title,
      html: message
    })
  }

}
