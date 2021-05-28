import flag from 'cozy-flags'
import { models } from 'cozy-client'

export const isOnlyOfficeEnabled = () => flag('drive.onlyoffice.enabled')

export const makeOnlyOfficeFileRoute = (file, isWithRouter) =>
  isWithRouter ? `/onlyoffice/${file.id}` : `/#/onlyoffice/${file.id}`

export const isOnlyOfficeReadOnly = ({ data }) =>
  data.attributes.onlyoffice.editor.mode === 'view'

export const isOnlyOfficeEditorSupported = ({
  file,
  isShared,
  isSharedWithMe
}) =>
  models.file.shouldBeOpenedByOnlyOffice(file) &&
  (isSharedWithMe ||
    (isShared && !isSharedWithMe && helpers.isOnlyOfficeEnabled()) ||
    (!isShared && helpers.isOnlyOfficeEnabled()))

/**
 * Returns true in case of sharing without being the owner.
 * Returns false otherwise (sharing with being the owner, or no sharing at all).
 * See https://docs.cozy.io/en/cozy-stack/office/#get-officeidopen
 * @param {object} params - Result of `/office/fileId/open`
 * @returns {boolean}
 */
export const isSharedWithMe = ({ data }) => data.attributes.sharecode

export const makeConfig = ({ data }, options) => {
  const onlyOffice = data.attributes.onlyoffice
  const serverUrl = onlyOffice.url
  const apiUrl = `${serverUrl}/web-apps/apps/api/documents/api.js`

  // complete config doc : https://api.onlyoffice.com/editors/advanced
  const docEditorConfig = {
    document: onlyOffice.document,
    editorConfig: onlyOffice.editor,
    token: onlyOffice.token,
    documentType: onlyOffice.documentType,
    ...options
  }

  return { serverUrl, apiUrl, docEditorConfig }
}

// use to mock fn in tests
const helpers = {
  isOnlyOfficeEnabled
}

export default helpers