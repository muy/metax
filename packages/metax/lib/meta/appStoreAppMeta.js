import PropTypes from "prop-types"

export const appStoreAppMeta = ({content}) => ({
    content,
    name: content && 'apple-itunes-app'
})

appStoreAppMeta.propTypes = {
    content: PropTypes.string.isRequired
}
