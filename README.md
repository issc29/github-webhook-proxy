# github-webhook-proxy

A simple Lambda function that recieves webhooks and routes them to the appropriate internal services based on the payload contents. 

## Example

GitHub send webhooks to a proxy address that forwards it to this Lambda function. This function then routes the webhook to the appropriate internal service based off the the repository_name specified in the webhook payload.
