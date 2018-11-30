# Acronimjs

![node (scoped with tag)](https://img.shields.io/node/v/@stdlib/stdlib/latest.svg?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge) ![GitHub All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=for-the-badge)

This is a free module for creating acronyms. It's all yours, basically download the zip file or you can clone or fork the repository in order to get things better. I'm still working on better modules. 

## Usage 

Install the module using `npm install acronimjs` andd then import the module into any folder on your computer and implement the acronym module to help with your UI and semantics in your your content.

Example code:

    ```javascript 

        let acronm = require('acronimjs') // for Nodejs
        
        // or

        import acronm from "acronimjs" // ES6 modules

    ```

Then for implementation and how to work with the `acronimjs` you can use the asynchronous call by passing a statement and then using a callback to get your result. 

    ```javascript

        acronm(statement, function(err, result) {
            try {
                console.log(result)
            } catch(err) {
                console.log(err)
            }
        })

    ```

I'm sure by now you can just copy the code and replace statement with a string (sentence of your choice) to create an acronym. Just take your time and see the best way of using this module, although you currently don't have a choice at all. I believe by now there is nothing much to say. You don't have to worry about other dependencies. "There is none." Just JavaScript.

# License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. 

Permissions:
   √    Commercial use
   √    Modification
   √    Distribution
   √    Private use
