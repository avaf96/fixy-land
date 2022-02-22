// JavaScript Document

     let country_code = document.querySelector("#mobile-number-register-cutomer");
            window.intlTelInput(country_code, {
                separateDialCode: true,
                excludeCountries: ["in", "il"],
                preferredCountries: ["om", "jp", "pk", "no"]
            });