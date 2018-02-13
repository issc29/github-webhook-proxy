# github-webhook-proxy

A simple Lambda function that recieves webhooks and routes them to the appropriate internal services based on the payload contents. 

## Example

GitHub send webhooks to a proxy address that forwards it to this Lambda function. This function then routes the webhook to the appropriate internal service based off the the repository_name specified in the webhook payload.

![screen shot 2018-02-13 at 2 01 12 pm](https://user-images.githubusercontent.com/6920330/36168274-7d418e24-10c6-11e8-897c-b9171e24d412.png)

