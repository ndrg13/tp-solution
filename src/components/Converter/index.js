import React from "react";
import "./Converter.css"
import Spinner from "../Spinner";

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseCurrency: "EUR",
            targetCurrency: "EUR",
            amount: "0",
            result: "",
            loading: false
        };
        this.changeAmount = this.changeAmount.bind(this);
        this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
        this.changeTargetCurrency = this.changeTargetCurrency.bind(this);
    }

    changeAmount(event) {
        this.setState({amount: event.target.value}, () => {
            if (this.checkAmountPositive()) {
                if (this.checkCurrencyUnequal()) {
                    this.setState({loading: true}, () => {
                        this.fetchCurrencyData()
                    })
                } else {
                    this.setState({result: this.state.amount})
                }
            }
        });
    }

    changeBaseCurrency(event) {
        this.setState({baseCurrency: event.target.value}, () => {
            if (this.checkAmountPositive()) {
                if (this.checkCurrencyUnequal()) {
                    this.setState({loading: true}, () => {
                        this.fetchCurrencyData()
                    })
                } else {
                    this.setState({result: this.state.amount})
                }
            }
        });
    }

    changeTargetCurrency(event) {
        this.setState({targetCurrency: event.target.value}, () => {
            if (this.checkAmountPositive()) {
                if (this.checkCurrencyUnequal()) {
                    this.setState({loading: true}, () => {
                        this.fetchCurrencyData()
                    })
                } else {
                    this.setState({result: this.state.amount})
                }
            }
        });
    }

    checkAmountPositive() {
        return this.state.amount > 0
    }

    checkCurrencyUnequal() {
        return this.state.baseCurrency !== this.state.targetCurrency
    }

    fetchCurrencyData() {
        fetch("https://api.exchangeratesapi.io/latest?base=" +
            this.state.baseCurrency + "&symbols=" +
            this.state.targetCurrency)
            .then(res => res.json())
            .then((result) => {
                this.convertAmount(result['rates'][this.state.targetCurrency])
            })
    }

    convertAmount(exchangeRate) {
        return this.setState({loading: false, result: this.state.amount * exchangeRate})
    }

    render() {
        //const { loading } = this.state;
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <h3>Convertisseur</h3>
                        <div className="col s8">
                            <div className="row">
                                <div className="col s6">
                                    <select
                                        defaultValue={this.state.baseCurrency}
                                        className="browser-default"
                                        name="inputDevises"
                                        id="inputDevises"
                                        onChange={this.changeBaseCurrency}
                                    >
                                        <option value="EUR">EUR</option>
                                        <option value="CHF">CHF</option>
                                        <option value="GBP">GBP</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                                <div className="col s6">
                                    <select
                                        defaultValue={this.state.targetCurrency}
                                        className="browser-default"
                                        name="outputDevises"
                                        id="outputDevises"
                                        onChange={this.changeTargetCurrency}
                                    >
                                        <option value="EUR">EUR</option>
                                        <option value="CHF">CHF</option>
                                        <option value="GBP">GBP</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input defaultValue={this.state.amount} onChange={this.changeAmount} id="amount"
                                           type="text" className="validate" pattern="[0-9]+"/>
                                    <span
                                        className="helper-text"
                                        data-error="Erreur"
                                        data-success="Valide"
                                    ></span>
                                    <label htmlFor="amount">Montant</label>
                                </div>
                                <div className="input-field col s12">
                                    <h5>Résultat : {this.state.loading ? <Spinner/> : this.state.result}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Converter;