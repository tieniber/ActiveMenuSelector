import { Component, createElement } from "react";

export default class ActiveMenuSelector extends Component {

    componentDidMount() {
        this.activateMenu();
    }

    render() {
        return null;
    }

    async activateMenu() {
        const { menuWidgetName, menuItemTitle } = this.props;
        //find the menu
        var menu = document.querySelector(".mx-name-" + menuWidgetName);
        
        // Sometimes the menu hasn't loaded yet. Try 3 times to get it and then give up.
        // Very rarely does it go beyond the first retry.
        if (menu === null) {
            await this.timeout(100);
            menu = document.querySelector(".mx-name-" + menuWidgetName);
            if (menu === null) {
                await this.timeout(200);
                menu = document.querySelector(".mx-name-" + menuWidgetName);
                if (menu === null) {
                    await this.timeout(400);
                    menu = document.querySelector(".mx-name-" + menuWidgetName);
                }
            }
        }
        if (menu === null) {
            console.error("ActiveMenuSelector widget could not find menu: " + menuWidgetName);
            return;
        }
        //remove the active state from any/all of the menu items
        if (menu.querySelector(".active") !== null) {
            const activeItems = menu.querySelectorAll(".active");
            activeItems.forEach(menuItem => menuItem.classList.remove("active"));
        }
        //add the active state back to the one that matches your target title
        const targetItem = menu.querySelector("a[title='" + menuItemTitle.value + "']");
        if (targetItem) {
            //top nav menu requires the parent (li) to have the active class
            targetItem.classList.add("active");
            //left nav tree requires the (a) element to have the active class
            targetItem.parentNode.classList.add("active");
        } else {
            console.error(
                "ActiveMenuSelector widget could not find target: " +
                menuItemTitle.value +
                " in menu: " +
                menuWidgetName
            );
        }
    }

    timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }
}

