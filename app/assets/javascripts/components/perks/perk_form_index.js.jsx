var Modal = ReactBootstrap.Modal;
var Tooltip = ReactBootstrap.Tooltip;
var Popover = ReactBootstrap.Popover;
var Button = ReactBootstrap.Button;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;

window.PerkFormIndex = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  makePerkForm: function () {
    this.setState({numPerkForms: this.state.numPerkForms + 1});
  },

  finishPerk: function () {
    ApiUtil.fetchSingleFoodtruck(parseInt(this.props.foodtruckId));
    this.props.history.pushState(null, 'foodtruck/' + this.props.foodtruckId, {});
  },

  getInitialState() {
    return { showModal: false, numPerkForms: 1 };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    let tooltip = <Tooltip>Generates Additional Perk From.</Tooltip>;

      var formInputs = [];

      for (var i = 0; i < this.state.numPerkForms; i++) {
        formInputs.push(
          <PerkForm key={i} perkKey={i} foodtruckId={this.props.foodtruckId}/>
        );
      }

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Add Perks
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Wanna Add Some Perks?</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p>Give your generous donors perks for matching or exceeding a set donation amount. The secret recipe to your
           spicy turkducken? A virtual high-five? A party catered with clowns dressed up as normal people? It's up to you how you wanna show some love for your
            supporters. Go ahead, add as perks many as you'd like!</p>

            <hr />

            <div>

              <OverlayTrigger placement="left" overlay={tooltip}>
                <Button bsStyle="default" onClick={this.makePerkForm} className="perk-form-button">
                  Add Another Perk</Button>
              </OverlayTrigger>

              <div>{formInputs}</div>

            </div>

          </Modal.Body>
          <Modal.Footer>

            <button onClick={this.finishPerk} className="perk-form-index-finish-button">
              Finish Food Truck!
            </button>

            <button onClick={this.finishPerk} className="perk-form-index-no-perks-button">
              No Perks Now, Take Me To My Food Truck!
            </button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
