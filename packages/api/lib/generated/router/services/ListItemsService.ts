/* istanbul ignore file */

/* eslint-disable */
import type { ListItem } from "../models/ListItem";
import type { ListItemSummary } from "../models/ListItemSummary";
import { HttpRequest } from "../core/HttpRequest";

export class ListItemsService {
  constructor(public readonly httpRequest: HttpRequest) {}

  /**
   * Create a list item
   * @returns any Success
   * @throws ApiError
   */
  public listItemCreate({
    channelId,
    requestBody,
  }: {
    channelId: string;
    requestBody: {
      /**
       * The message of the list item
       */
      message: Record<string, any> | string;
      note?: {
        /**
         * The note of the list item
         */
        content: Record<string, any> | string;
      };
    };
  }): Promise<{
    listItem: ListItem;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/channels/{channelId}/items",
      path: {
        channelId: channelId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Get list items within a channel
   * @returns any Success
   * @throws ApiError
   */
  public listItemReadMany({ channelId }: { channelId: string }): Promise<{
    listItems: Array<ListItemSummary>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/channels/{channelId}/items",
      path: {
        channelId: channelId,
      },
    });
  }

  /**
   * Get a list item
   * @returns any Success
   * @throws ApiError
   */
  public listItemRead({
    channelId,
    listItemId,
  }: {
    channelId: string;
    listItemId: string;
  }): Promise<{
    listItem: ListItem;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/channels/{channelId}/items/{listItemId}",
      path: {
        channelId: channelId,
        listItemId: listItemId,
      },
    });
  }

  /**
   * [deprecated] Update a list item
   * Deprecating this route in favor of the *patch* route
   * @returns any Success
   * @throws ApiError
   */
  public listItemUpdateDeprecated({
    channelId,
    listItemId,
    requestBody,
  }: {
    channelId: string;
    listItemId: string;
    requestBody: {
      /**
       * The message of the list item
       */
      message: string;
      note?: {
        /**
         * The note of the list item
         */
        content: string;
      } | null;
    };
  }): Promise<{
    listItem: ListItem;
  }> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/channels/{channelId}/items/{listItemId}",
      path: {
        channelId: channelId,
        listItemId: listItemId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Update a list item
   * @returns any Success
   * @throws ApiError
   */
  public listItemUpdate({
    channelId,
    listItemId,
    requestBody,
  }: {
    channelId: string;
    listItemId: string;
    requestBody: {
      /**
       * The message of the list item
       */
      message?: string;
      note?: {
        /**
         * The note of the list item
         */
        content: string;
      } | null;
    };
  }): Promise<{
    listItem: ListItem;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/channels/{channelId}/items/{listItemId}",
      path: {
        channelId: channelId,
        listItemId: listItemId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete a list item
   * @returns void
   * @throws ApiError
   */
  public listItemDelete({
    channelId,
    listItemId,
  }: {
    channelId: string;
    listItemId: string;
  }): Promise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/channels/{channelId}/items/{listItemId}",
      path: {
        channelId: channelId,
        listItemId: listItemId,
      },
    });
  }

  /**
   * Complete a list item
   * @returns void
   * @throws ApiError
   */
  public listItemCompleteCreate({
    channelId,
    listItemId,
  }: {
    channelId: string;
    listItemId: string;
  }): Promise<void> {
    return this.httpRequest.request({
      method: "POST",
      url: "/channels/{channelId}/items/{listItemId}/complete",
      path: {
        channelId: channelId,
        listItemId: listItemId,
      },
    });
  }

  /**
   * Uncomplete a list item
   * @returns void
   * @throws ApiError
   */
  public listItemCompleteDelete({
    channelId,
    listItemId,
  }: {
    channelId: string;
    listItemId: string;
  }): Promise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/channels/{channelId}/items/{listItemId}/complete",
      path: {
        channelId: channelId,
        listItemId: listItemId,
      },
    });
  }
}