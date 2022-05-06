import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './business.css'
import '../accountSetting/acount.css'


const Business = () => {
    useEffect(()=>{
        setTimeout(() => {
            console.log('111')
        }, 1000);
    },[])
    return (
        <section className="compliance ng-scope" ng-app="complianceApp">
            <header className="compliance__header">
                <h1 className="header__title">Business profile</h1>
            </header>
            <nav className="compliance__nav ng-scope" ng-controller="StatusController as sc">
                <div ng-show="(sc.entities.length &amp;&amp; sc.entities[0].de_name != 'Default') || sc.entities.length > 1" className="clear ng-hide">
                    <div className="section__field-group" style={{ margin: "20px 0 0 0" }}>
                        <div className="field-group__line" style={{ margin: "0" }}>
                            <div className="control control--md" style={{ margin: "0 20px 0 0" }}>
                                <select className="control__select ng-pristine ng-unuched ng-valid" ng-options="entity.de_id as entity.de_name for entity in sc.entities | orderBy : ['-de_order', 'de_id']" ng-model="sc.complianceData.entity" ng-change="sc.updateData()">
                                    <option defaultValue="number:195792" label="Default">Default</option>
                                </select>
                            </div>
                            <button ng-click="sc.setDefault(sc.complianceData.entity)" type="button" className="compliance-button ng-binding" style={{ height: "40px", lineHeight: "20px", float: "left", margin: "0px 20px 0px 0px" }}>
                                Set default
                            </button>
                            <button ng-click="sc.showEntityForm()" type="button" className="compliance-button ng-binding" style={{ height: "40px", lineHeight: "20px" }}>
                                ADD NEW BUSINESS ENTITY
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="nav__list">
                    <li ui-sref-active="list__item--sel" className="list__item list__item--sel">
                        <Link ui-sref="business" className="item__link" to="#">
                            <div className="link__counter">1</div>
                            <div className="link__title">Business Information</div>
                            <div className="link__status ng-binding">In progress</div>
                        </Link>
                    </li>
                    <li ui-sref-active="list__item--sel" className="list__item">
                        <Link ui-sref="payouts" className="item__link" to="">
                            <div className="link__counter">2</div>
                            <div className="link__title">Payout Information</div>
                            <div className="link__status ng-binding">Let's get started</div>
                        </Link>
                    </li>
                    <li ui-sref-active="list__item--sel" className="list__item">
                        <Link ui-sref="documents" className="item__link" to="">
                            <div className="link__counter">3</div>
                            <div className="link__title">Documents to Upload</div>
                            <div className="link__status ng-binding">Let's get started</div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div style={{ position: "relative" }}>
                <div loading-blocker="" style={{ display: "none", position: "absolute", inset: "0px", background: "rgba(255, 255, 255, 0.7)", zIndex: "2" }}>
                    <div loading="" className="" style={{ position: "fixed", top: "50%", left: "50%", zIndex: "3" }}>
                    </div>
                </div>
                <section className="compliance__information ng-scope">
                    <section className="information__section">
                        <div>
                            <div className="generic-error ng-binding"></div>
                        </div>
                        <header className="section__header">
                            <h1 className="header__title">General Business Information:</h1>
                        </header>
                        <div className="section__field-group">
                            <label className="field-group__label">
                                <span className="field-group__label-inner">Your Business Location:</span>
                            </label>
                            <div className="field-group__line">
                                <div className="control control--md">
                                    <select className="control__select ng-pristine ng-untouched ng-valid" ng-options="option.co_name for option in bi.countries track by option.co_id" ng-model="bi.formData.data.selectedCountry" ng-change="bi.updateSelected(true)"><option defaultValue="1" label="United States">United States</option><option defaultValue="3" label="Afghanistan">Afghanistan</option><option defaultValue="4" label="Albania">Albania</option><option defaultValue="5" label="Algeria">Algeria</option><option defaultValue="6" label="American Samoa">American Samoa</option><option defaultValue="7" label="Andorra">Andorra</option><option defaultValue="8" label="Angola">Angola</option><option defaultValue="9" label="Anguilla">Anguilla</option><option defaultValue="10" label="Antigua and Barbuda">Antigua and Barbuda</option><option defaultValue="11" label="Argentina">Argentina</option><option defaultValue="12" label="Armenia">Armenia</option><option defaultValue="233" label="Aruba">Aruba</option><option defaultValue="14" label="Australia">Australia</option><option defaultValue="15" label="Austria">Austria</option><option defaultValue="16" label="Azerbaijan">Azerbaijan</option><option defaultValue="17" label="Bahamas">Bahamas</option><option defaultValue="18" label="Bahrain">Bahrain</option><option defaultValue="19" label="Bangladesh">Bangladesh</option><option defaultValue="20" label="Barbados">Barbados</option><option defaultValue="21" label="Belarus">Belarus</option><option defaultValue="22" label="Belgium">Belgium</option><option defaultValue="23" label="Belize">Belize</option><option defaultValue="24" label="Benin">Benin</option><option defaultValue="25" label="Bermuda">Bermuda</option><option defaultValue="26" label="Bhutan">Bhutan</option><option defaultValue="27" label="Bolivia">Bolivia</option><option defaultValue="28" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option defaultValue="29" label="Botswana">Botswana</option><option defaultValue="30" label="Brazil">Brazil</option><option defaultValue="31" label="British Indian Ocean Territory">British Indian Ocean Territory</option><option defaultValue="32" label="Brunei Darussalam">Brunei Darussalam</option><option defaultValue="33" label="Bulgaria">Bulgaria</option><option defaultValue="34" label="Burkina Faso">Burkina Faso</option><option defaultValue="35" label="Burundi">Burundi</option><option defaultValue="37" label="Cambodia">Cambodia</option><option defaultValue="36" label="Cameroon">Cameroon</option><option defaultValue="2" label="Canada">Canada</option><option defaultValue="39" label="Cape Verde">Cape Verde</option><option defaultValue="40" label="Cayman Islands">Cayman Islands</option><option defaultValue="41" label="Central African Republic">Central African Republic</option><option defaultValue="42" label="Chad">Chad</option><option defaultValue="43" label="Chile">Chile</option><option defaultValue="44" label="China">China</option><option defaultValue="45" label="Colombia">Colombia</option><option defaultValue="46" label="Comoros">Comoros</option><option defaultValue="47" label="Congo">Congo</option><option defaultValue="227" label="Congo The Democratic Republic of the">Congo The Democratic Republic of the</option><option defaultValue="48" label="Cook Islands">Cook Islands</option><option defaultValue="49" label="Costa Rica">Costa Rica</option><option defaultValue="50" label="Cote d'Ivoire">Cote d'Ivoire</option><option defaultValue="51" label="Croatia">Croatia</option><option defaultValue="52" label="Cuba">Cuba</option><option defaultValue="235" label="Curacao">Curacao</option><option defaultValue="53" label="Cyprus">Cyprus</option><option defaultValue="54" label="Czech Republic">Czech Republic</option><option defaultValue="55" label="Denmark">Denmark</option><option defaultValue="56" label="Djibouti">Djibouti</option><option defaultValue="57" label="Dominica">Dominica</option><option defaultValue="58" label="Dominican Republic">Dominican Republic</option><option defaultValue="59" label="Ecuador">Ecuador</option><option defaultValue="60" label="Egypt">Egypt</option><option defaultValue="61" label="El Salvador">El Salvador</option><option defaultValue="62" label="Equatorial Guinea">Equatorial Guinea</option><option defaultValue="63" label="Eritrea">Eritrea</option><option defaultValue="64" label="Estonia">Estonia</option><option defaultValue="65" label="Ethiopia">Ethiopia</option><option defaultValue="66" label="Falkland Islands">Falkland Islands</option><option defaultValue="67" label="Faroe Islands">Faroe Islands</option><option defaultValue="68" label="Federated States of Micronesia">Federated States of Micronesia</option><option defaultValue="69" label="Fiji">Fiji</option><option defaultValue="70" label="Finland">Finland</option><option defaultValue="71" label="France">France</option><option defaultValue="72" label="French Guiana">French Guiana</option><option defaultValue="73" label="French Polynesia">French Polynesia</option><option defaultValue="74" label="Gabon">Gabon</option><option defaultValue="202" label="Gambia">Gambia</option><option defaultValue="75" label="Georgia">Georgia</option><option defaultValue="76" label="Germany">Germany</option><option defaultValue="77" label="Ghana">Ghana</option><option defaultValue="78" label="Gibraltar">Gibraltar</option><option defaultValue="79" label="Greece">Greece</option><option defaultValue="80" label="Greenland">Greenland</option><option defaultValue="81" label="Grenada">Grenada</option><option defaultValue="82" label="Guadeloupe">Guadeloupe</option><option defaultValue="83" label="Guam">Guam</option><option defaultValue="84" label="Guatemala">Guatemala</option><option defaultValue="236" label="Guernsey">Guernsey</option><option defaultValue="85" label="Guinea">Guinea</option><option defaultValue="86" label="Guinea-Bissau">Guinea-Bissau</option><option defaultValue="87" label="Guyana">Guyana</option><option defaultValue="88" label="Haiti">Haiti</option><option defaultValue="89" label="Honduras">Honduras</option><option defaultValue="90" label="Hong Kong">Hong Kong</option><option defaultValue="91" label="Hungary">Hungary</option><option defaultValue="92" label="Iceland">Iceland</option><option defaultValue="93" label="India">India</option><option defaultValue="94" label="Indonesia">Indonesia</option><option defaultValue="95" label="Iran">Iran</option><option defaultValue="96" label="Iraq">Iraq</option><option defaultValue="97" label="Ireland">Ireland</option><option defaultValue="98" label="Isle of Man">Isle of Man</option><option defaultValue="99" label="Israel">Israel</option><option defaultValue="100" label="Italy">Italy</option><option defaultValue="101" label="Jamaica">Jamaica</option><option defaultValue="102" label="Japan">Japan</option><option defaultValue="237" label="Jersey">Jersey</option><option defaultValue="103" label="Jordan">Jordan</option><option defaultValue="104" label="Kazakhstan">Kazakhstan</option><option defaultValue="105" label="Kenya">Kenya</option><option defaultValue="106" label="Kiribati">Kiribati</option><option defaultValue="107" label="Korea (Peoples Republic of)">Korea (Peoples Republic of)</option><option defaultValue="108" label="Korea (Republic of)">Korea (Republic of)</option><option defaultValue="234" label="Kosovo">Kosovo</option><option defaultValue="109" label="Kuwait">Kuwait</option><option defaultValue="110" label="Kyrgyzstan">Kyrgyzstan</option><option defaultValue="111" label="Laos">Laos</option><option defaultValue="112" label="Latvia">Latvia</option><option defaultValue="113" label="Lebanon">Lebanon</option><option defaultValue="114" label="Lesotho">Lesotho</option><option defaultValue="115" label="Liberia">Liberia</option><option defaultValue="116" label="Libya">Libya</option><option defaultValue="117" label="Liechtenstein">Liechtenstein</option><option defaultValue="118" label="Lithuania">Lithuania</option><option defaultValue="119" label="Luxembourg">Luxembourg</option><option defaultValue="120" label="Macau">Macau</option><option defaultValue="121" label="Macedonia">Macedonia</option><option defaultValue="122" label="Madagascar">Madagascar</option><option defaultValue="123" label="Malawi">Malawi</option><option defaultValue="124" label="Malaysia">Malaysia</option><option defaultValue="125" label="Maldives">Maldives</option><option defaultValue="126" label="Mali">Mali</option><option defaultValue="127" label="Malta">Malta</option><option defaultValue="128" label="Marshall Islands">Marshall Islands</option><option defaultValue="129" label="Martinique">Martinique</option><option defaultValue="232" label="Mauritania">Mauritania</option><option defaultValue="130" label="Mauritius">Mauritius</option><option defaultValue="131" label="Mayotte">Mayotte</option><option defaultValue="132" label="Mexico">Mexico</option><option defaultValue="133" label="Moldova">Moldova</option><option defaultValue="134" label="Monaco">Monaco</option><option defaultValue="135" label="Mongolia">Mongolia</option><option defaultValue="136" label="Montenegro">Montenegro</option><option defaultValue="137" label="Montserrat">Montserrat</option><option defaultValue="138" label="Morocco">Morocco</option><option defaultValue="139" label="Mozambique">Mozambique</option><option defaultValue="140" label="Myanmar">Myanmar</option><option defaultValue="141" label="Namibia">Namibia</option><option defaultValue="142" label="Nauru">Nauru</option><option defaultValue="143" label="Nepal">Nepal</option><option defaultValue="144" label="Netherlands">Netherlands</option><option defaultValue="145" label="Netherlands Antilles">Netherlands Antilles</option><option defaultValue="146" label="New Caledonia">New Caledonia</option><option defaultValue="147" label="New Zealand">New Zealand</option><option defaultValue="148" label="Nicaragua">Nicaragua</option><option defaultValue="149" label="Niger">Niger</option><option defaultValue="150" label="Nigeria">Nigeria</option><option defaultValue="151" label="Niue">Niue</option><option defaultValue="152" label="Norfolk Island">Norfolk Island</option><option defaultValue="153" label="Northern Mariana Islands">Northern Mariana Islands</option><option defaultValue="154" label="Norway">Norway</option><option defaultValue="155" label="Oman">Oman</option><option defaultValue="156" label="Pakistan">Pakistan</option><option defaultValue="157" label="Palau">Palau</option><option defaultValue="231" label="Palestinian Territory">Palestinian Territory</option><option defaultValue="158" label="Panama">Panama</option><option defaultValue="159" label="Papua New Guinea">Papua New Guinea</option><option defaultValue="160" label="Paraguay">Paraguay</option><option defaultValue="161" label="Peru">Peru</option><option defaultValue="162" label="Philippines">Philippines</option><option defaultValue="163" label="Pitcairn">Pitcairn</option><option defaultValue="164" label="Poland">Poland</option><option defaultValue="165" label="Portugal">Portugal</option>
                                        <option defaultValue="166" label="Puerto Rico">Puerto Rico</option>
                                        <option defaultValue="167" label="Qatar">Qatar</option><option defaultValue="168" label="Reunion">Reunion</option>
                                        <option defaultValue="169" label="Romania">Romania</option><option defaultValue="170" label="Russia">Russia</option>
                                        <option defaultValue="171" label="Rwanda">Rwanda</option><option defaultValue="13" label="Saint Helena">Saint Helena</option>
                                        <option defaultValue="172" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                        <option defaultValue="173" label="San Marino">San Marino</option>
                                        <option defaultValue="174" label="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option defaultValue="175" label="Saudi Arabia">Saudi Arabia</option>
                                        <option defaultValue="176" label="Senegal">Senegal</option>
                                        <option defaultValue="177" label="Serbia">Serbia</option>
                                        <option defaultValue="178" label="Seychelles">Seychelles</option>
                                        <option defaultValue="179" label="Sierra Leone">Sierra Leone</option>
                                        <option defaultValue="180" label="Singapore">Singapore</option>
                                        <option defaultValue="181" label="Slovakia">Slovakia</option>
                                        <option defaultValue="182" label="Slovenia">Slovenia</option>
                                        <option defaultValue="183" label="Solomon Islands">Solomon Islands</option>
                                        <option defaultValue="184" label="Somalia">Somalia</option><option defaultValue="185" label="South Africa">South Africa</option>
                                        <option defaultValue="186" label="South Georgia">South Georgia</option>
                                        <option defaultValue="187" label="Spain">Spain</option><option defaultValue="188" label="Sri Lanka">Sri Lanka</option>
                                        <option defaultValue="189" label="St. Kitts and Nevis">St. Kitts and Nevis</option>
                                        <option defaultValue="190" label="St. Lucia">St. Lucia</option><option defaultValue="191" label="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                                        <option defaultValue="192" label="Sudan">Sudan</option><option defaultValue="193" label="Suriname">Suriname</option>
                                        <option defaultValue="194" label="Swaziland">Swaziland</option><option defaultValue="195" label="Sweden">Sweden</option>
                                        <option defaultValue="196" label="Switzerland">Switzerland</option><option defaultValue="197" label="Syrian Arab Republic">Syrian Arab Republic</option>
                                        <option defaultValue="198" label="Taiwan">Taiwan</option><option defaultValue="199" label="Tajikistan">Tajikistan</option><option defaultValue="200" label="Tanzania">Tanzania</option>
                                        <option defaultValue="201" label="Thailand">Thailand</option><option defaultValue="203" label="Togo">Togo</option><option defaultValue="204" label="Tokelau">Tokelau</option>
                                        <option defaultValue="205" label="Tonga">Tonga</option><option defaultValue="206" label="Trinidad and Tobago">Trinidad and Tobago</option><option defaultValue="207" label="Tunisia">Tunisia</option>
                                        <option defaultValue="208" label="Turkey">Turkey</option><option defaultValue="209" label="Turkmenistan">Turkmenistan</option>
                                        <option defaultValue="210" label="Turks and Caicos Islands">Turks and Caicos Islands</option><option defaultValue="211" label="Tuvalu">Tuvalu</option>
                                        <option defaultValue="212" label="Uganda">Uganda</option><option defaultValue="213" label="Ukraine">Ukraine</option>
                                        <option defaultValue="214" label="United Arab Emirates">United Arab Emirates</option><option defaultValue="215" label="United Kingdom">United Kingdom</option>
                                        <option defaultValue="216" label="Uruguay">Uruguay</option><option defaultValue="217" label="Uzbekistan">Uzbekistan</option><option defaultValue="218" label="Vanuatu">Vanuatu</option>
                                        <option defaultValue="219" label="Venezuela">Venezuela</option><option defaultValue="220" label="Vietnam">Vietnam</option>
                                        <option defaultValue="221" label="Virgin Islands (U.K.)">Virgin Islands (U.K.)</option><option defaultValue="222" label="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                                        <option defaultValue="223" label="Wallis and Futuna Islands">Wallis and Futuna Islands</option><option defaultValue="230" label="Western Sahara">Western Sahara</option>
                                        <option defaultValue="224" label="Western Samoa">Western Samoa</option><option defaultValue="225" label="Yemen">Yemen</option><option defaultValue="228" label="Zambia">Zambia</option>
                                        <option defaultValue="229" label="Zimbabwe">Zimbabwe</option><option defaultValue="238" label="Timor-Leste">Timor-Leste</option><option defaultValue="239" label="Vatican City">Vatican City</option>
                                        <option defaultValue="240" label="Saint-Martin">Saint-Martin</option><option defaultValue="241" label="Sint Maarten">Sint Maarten</option></select>
                                    <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_co_id"></div>
                                    <div className="error ng-binding"></div>
                                </div>

                                <div style={{ float: "left" }} className="error ng-hide" ng-show="bi.errorsService.errorsResult.bi.dp_co_id_sanctionList">
                                    <p>The country you have chosen is not supported by Paymentwall.</p>
                                    <p>We do not work with entities or individuals that are registered in countries under international sanction lists. Learn more about
                                        <Link to="#">sanctioned countries and entities</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section__field-group">
                            <label className="field-group__label">
                                <span className="field-group__label-inner">Business Type:</span>
                            </label>
                            <div className="field-group__line">
                                <div className="control control--md">
                                    <select className="control__select ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_type" ng-change="bi.updateUbos()">
                                        <option defaultValue="? object:null ?"></option>
                                        <option defaultValue="company">Company</option>
                                        <option defaultValue="individual">Individual/Sole Proprietorship</option>
                                    </select>
                                    <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_type"></div>
                                    <div className="error ng-binding"></div>
                                </div>
                            </div>
                        </div>

                        <div ng-include="bi.templates.business.general" className="ng-scope">
                            <div className="section__field-group ng-scope ng-hide" ng-show="'company' === bi.formData.data.dp_type">
                                <label className="field-group__label">
                                    <span className="field-group__label-inner ">Business Registration Number:</span>
                                </label>
                                <div className="field-group__line">
                                    <div className="control control--md">
                                        <input type="text" placeholder="XXXXX XXXX XXXXX" className="control__input ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_reg_number" ng-blur="bi.syncCompanyAccount()" />
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_reg_number"></div>
                                        <div className="error ng-binding"></div>
                                        <div ng-show="!bi.isSyncCompanyAccount" style={{ color: "red" }} className="ng-hide">Business Registration Number is not valid</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section__field-group ng-scope ng-hide" ng-show="'company' === bi.formData.data.dp_type">
                                <label className="field-group__label">
                                    <span className="field-group__label-inner">Company Name:</span>
                                </label>
                                <div className="field-group__line">
                                    <div className="control control--md">
                                        <input type="text" placeholder="Company" className="control__input ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_company_name" />
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_company_name"></div>
                                        <div className="error ng-binding"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="section__field-group ng-scope">
                                <label className="field-group__label">
                                    <span className="field-group__label-inner">Business Address:</span>
                                </label>
                                <div className="field-group__line">
                                    <div className="control control--md">
                                        <input type="text" placeholder="Street" className="control__input ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_street" />
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_street"></div>
                                        <div className="error ng-binding"></div>
                                    </div>
                                </div>
                                <div className="field-group__line">
                                    <div className="control control--md">
                                        <input type="text" placeholder="City" className="control__input ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_city" />
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_city"></div>
                                        <div className="error ng-binding"></div>
                                    </div>
                                </div>
                                <div className="field-group__line">
                                    <div className="control control--sm ng-scope" ng-if="bi.countryHasState(bi.formData.data.selectedCountry)">
                                        <select className="control__select ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.selectedRegion" ng-change="bi.updateSelected()" ng-options="option.r_name for option in bi.regions[bi.formData.data.selectedCountry.co_id] track by option.r_id"><option defaultValue="?"></option><option defaultValue="2180" label="Alytaus Apskritis">Alytaus Apskritis</option><option defaultValue="2181" label="Kauno Apskritis">Kauno Apskritis</option><option defaultValue="2182" label="Klaipedos Apskritis">Klaipedos Apskritis</option><option defaultValue="2183" label="Marijampoles Apskritis">Marijampoles Apskritis</option><option defaultValue="2184" label="Panevezio Apskritis">Panevezio Apskritis</option><option defaultValue="2185" label="Siauliu Apskritis">Siauliu Apskritis</option><option defaultValue="2186" label="Taurages Apskritis">Taurages Apskritis</option><option defaultValue="2187" label="Telsiu Apskritis">Telsiu Apskritis</option><option defaultValue="2188" label="Utenos Apskritis">Utenos Apskritis</option><option defaultValue="2189" label="Vilniaus Apskritis">Vilniaus Apskritis</option></select>
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_state"></div>
                                        <div className="error ng-binding"></div>
                                    </div>
                                    <div className="control control--sm">
                                        <input type="text" placeholder="ZIP code" className="control__input ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_zip_code" />
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_zip_code"></div>
                                        <div className="error ng-binding"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="section__field-group ng-scope">
                                <label className="field-group__label">
                                    <span className="field-group__label-inner">Tax ID Number:</span>
                                </label>
                                <div className="field-group__line">		<div className="control control--md">
                                    <input readOnly="" type="text" className="control__input country-prefix ng-pristine ng-untouched ng-valid" ng-show="bi.formData.data.vatPrefix" ng-model="bi.formData.data.vatPrefix" ng-model-options="{getterSetter: true}" />
                                    <input type="text" placeholder="XXXXX XXXX XXXXX" className="control__input vat ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_tax_id" />
                                    <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_tax_id"></div>
                                    <div className="error ng-binding"></div>
                                </div>
                                </div>
                            </div>
                            <div className="section__field-group ng-scope">
                                <label className="field-group__label">
                                    <span className="field-group__label-inner">Website Address:</span>
                                </label>
                                <div className="field-group__line">
                                    <div className="control control--md">
                                        <input type="text" placeholder="http://" className="control__input ng-pristine ng-untouched ng-valid" ng-model="bi.formData.data.dp_website" />
                                        <div className="success ng-hide" ng-show="bi.errorsService.successResult.bi.dp_website"></div>
                                        <div className="error ng-binding"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div ng-include="bi.templates.business.representative" className="ng-scope">
                        <section ng-show="bi.formData.data.dp_type" className="information__section ng-scope ng-hide">
                            <header className="section__header">
                                <h1 className="header__title ng-hide" ng-show="'individual' === bi.formData.data.dp_type">You, the Business Representative:</h1>
                                <h1 className="header__title ng-hide" ng-show="'company' === bi.formData.data.dp_type">Business Representatives:</h1>
                                <h2 className="header__sub-title">
                                    <Link to="#" className="add_first_ubo ng-hide" ng-show="!bi.formData.ubo.length &amp;&amp; 'company' === bi.formData.data.dp_type" ng-click="bi.addPerson()">Add directors and individuals with 10% or more interest in the company</Link>
                                    <Link to="#" className="add_first_ubo ng-hide" ng-show="!bi.formData.ubo.length &amp;&amp; 'individual' === bi.formData.data.dp_type" ng-click="bi.addPerson()">Add your info</Link>
                                </h2>
                                <div className="error ng-binding"></div>
                            </header>
                            <Link to="#" className="section__add section__add--entity ng-hide" ng-show="bi.reprAvailable() &amp;&amp; 'company' === bi.formData.data.dp_type" ng-click="bi.addPerson()">Add another director or individual with 10% or more interest in the company</Link>
                        </section></div>

                    <section className="information__footer">
                        <Link to="#" ng-click="bi.proceedData('payouts')" className="compliance-button compliance-button--next">Save &amp; go to the next step</Link>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Business;