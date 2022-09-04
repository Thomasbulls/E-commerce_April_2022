//  react_hook_form/Step_1.jsx
export const handleAddressCheckbox = (e, setValue, setChecked, postalCodeWatch, countryWatch, stateWatch, cityWatch, addressWatch) => {
    if (e.target.checked) {
        setValue("billing_postalCode", postalCodeWatch);
        setValue("billing_country", countryWatch);
        setValue("billing_state", stateWatch);
        setValue("billing_city", cityWatch);
        setValue("billing_address", addressWatch);
    } else {
        setValue("billing_address", "");
        setValue("billing_city", "");
        setValue("billing_state", "");
        setValue("billing_postalCode", "");
        setValue("billing_country", "");
    }
    setChecked(e.target.checked);
}

// mainPage-products/productTile_1.jsx
export const filterAndSort = (data, sortOrder, setFilterSortData) => {

    if (sortOrder) {
        switch (sortOrder) {
            case "sortPriceDown":
                data.sort((a,b) => Number(b.price) - Number(a.price))
                break;
            case "sortPriceUp":
                data.sort((a,b) => Number(a.price) - Number(b.price))
                break;
            case "sortNameUp":
                data.sort((a,b) => a.slug < b.slug ? -1 : 1)
                break;
            case "sortNameDown":
                data.sort((a,b) => b.slug < a.slug ? -1 : 1)
                break;
            default:
                return;
        }
    }
    setFilterSortData(data);
}


export const useShippingAddress = (setValue) => {
    const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById( 'autocomplete1'),
        {
            types: ['address'],
            componentRestrictions: {'country': 'CA'},
        }
    )
    autocomplete.addListener('place_changed', () => {

        let addressArray = autocomplete.getPlace().address_components;
        const address = {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        }
        addressArray.forEach(ele => {
            if (ele.types.includes('street_number')) {
                address.street += ele.long_name;
            }
            if (ele.types.includes('route')) {
                if (address.street === "") {
                    address.street += ele.short_name;
                } else {
                    address.street += ` ${ele.short_name}`;
                }
            }
            if (ele.types.includes('postal_code')) {
                address.postalCode += ele.long_name;
            }
            if (ele.types.includes('locality')) {
                address.city += ele.long_name; 
            }
            if (ele.types.includes('administrative_area_level_1')) {
                address.state += ele.short_name;
            }
            if (ele.types.includes('country')) {
                address.country += ele.long_name;
            }
        })

        setValue("shipping_postalCode", address?.postalCode)
        setValue("shipping_country", address?.country) 
        setValue("shipping_state", address?.state)
        setValue("shipping_city", address?.city)
        setValue("shipping_address", address?.street);
    })
}


export const useBillingAddress = (setValue, ref, setChecked) => {
    const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById( 'autocomplete2'),
        {
            types: ['address'],
            componentRestrictions: {'country': 'CA'},
        }
    )
    autocomplete.addListener('place_changed', () => {

        let addressArray = autocomplete.getPlace().address_components;
        const address = {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        }
        addressArray.forEach(ele => {
            if (ele.types.includes('street_number')) {
                address.street += ele.long_name;
            }
            if (ele.types.includes('route')) {
                if (address.street === "") {
                    address.street += ele.short_name;
                } else {
                    address.street += ` ${ele.short_name}`;
                }
            }
            if (ele.types.includes('postal_code')) {
                address.postalCode += ele.long_name;
            }
            if (ele.types.includes('locality')) {
                address.city += ele.long_name; 
            }
            if (ele.types.includes('administrative_area_level_1')) {
                address.state += ele.short_name;
            }
            if (ele.types.includes('country')) {
                address.country += ele.long_name;
            }
        })
        if (ref.current.checked) setChecked(false);
        
        setValue("billing_postalCode", address.postalCode)
        setValue("billing_country", address.country) 
        setValue("billing_state", address.state)
        setValue("billing_city", address.city)
        setValue("billing_address", address.street);
    })
}