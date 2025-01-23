# Write your MySQL query statement below
SELECT U.name as name, COALESCE(SUM(r.distance), 0) as travelled_distance from Users u LEFT JOIN Rides r 
ON u.id = r.user_id
GROUP BY u.id
ORDER BY travelled_distance DESC, U.name ASC