const BACKEND_URL = "http://localhost:3000";
const id = "64493f96826d3aabb5429f91";

export default{
    REST_SIGNUP: BACKEND_URL+`/restaurant/signup`,
    REST_SIGNIN: BACKEND_URL+`/restaurant/signin`,
    BOOKINGS:BACKEND_URL+`/booking//history/`,
    PROFILE:BACKEND_URL+`/restaurant/profile/`,
    BOOKING_COUNT:BACKEND_URL+`/booking/count/`,
    REST_COUNT:BACKEND_URL+`/restaurant/count`,
    PLAN_LIST:BACKEND_URL+`/plan/plans-list`,
    REVIEW_LIST:BACKEND_URL+`/review/restaurant-reviews/${id}`,
    REVIEW_COUNT:BACKEND_URL+`/review/count/`,
    SUBSCRIBE_PLAN:BACKEND_URL+`/plan/subscribe`,
    PAYMENT_SUBSCRIBE:BACKEND_URL+`/payment/pay`,
    TODAY_BOOKINGS_COUNT:BACKEND_URL+`/booking/tcount/`,
    REST_CUSTOMER_COUNT:BACKEND_URL+`/rest-customercount/${id}`,
    ADD_CUISINE:BACKEND_URL+`/restaurant/add-cuisines/`,
    ADD_FACILITY:BACKEND_URL+`/restaurant/add-facilities/`,
    REMOVE_CUISINE:BACKEND_URL+`/restaurant/remove-cuisine/`,
    REMOVE_FACILITY:BACKEND_URL+`/restaurant/remove-facility/`,
    VERIFY_PASSWORD:BACKEND_URL+`/restaurant/verify-pass`,
    UPDATE_PASSWORD:BACKEND_URL+`/restaurant/changepass`,
    UPLOAD_IMAGE:BACKEND_URL+`/restaurant/restaurants/addImg`,
   
    TRIAL:BACKEND_URL+`/`
}
