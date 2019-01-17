/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at https://paperbits.io/license.
 */

import * as ko from "knockout";
import template from "./layout.html";
import { Component } from "@paperbits/common/ko/decorators";

@Component({
    selector: "email-layout",
    template: template
})
export class LayoutViewModel {
    public title: KnockoutObservable<string>;
    public description: KnockoutObservable<string>;
    public permalinkTemplate: KnockoutObservable<string>;
    public widgets: KnockoutObservableArray<Object>;

    constructor() {
        this.widgets = ko.observableArray<Object>();
        this.title = ko.observable<string>();
        this.description = ko.observable<string>();
        this.permalinkTemplate = ko.observable<string>();
    }
}