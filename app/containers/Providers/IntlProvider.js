import { connect } from "react-redux";
import { appSelectors } from "../../state/app";
import IntlProviderComponent from "../../components/Providers/IntlProvider";

const mapStateToProps = state => {
  return {
    locale: appSelectors.getLocale(state),
    created: appSelectors.getCreated(state)
  };
};

const IntlProvider = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(IntlProviderComponent);

export default IntlProvider;
